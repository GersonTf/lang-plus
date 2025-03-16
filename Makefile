# A+ Languages Project Makefile
# Make commands for common development tasks

.PHONY: dev build start lint lint-fix format format-check check fix storybook build-storybook clean help

# Default target
.DEFAULT_GOAL := help

# Colors for terminal output
COLOR_RESET = \033[0m
COLOR_BOLD = \033[1m
COLOR_GREEN = \033[32m
COLOR_YELLOW = \033[33m
COLOR_BLUE = \033[34m
COLOR_MAGENTA = \033[35m

help: ## Show this help
	@echo "$(COLOR_BOLD)A+ Languages Project Commands:$(COLOR_RESET)"
	@echo "$(COLOR_BOLD)--------------------------------$(COLOR_RESET)"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "$(COLOR_GREEN)%-15s$(COLOR_RESET) %s\n", $$1, $$2}'

# Development
dev: ## Start development server
	@echo "$(COLOR_BLUE)Starting development server...$(COLOR_RESET)"
	yarn dev

start: ## Start production server
	@echo "$(COLOR_BLUE)Starting production server...$(COLOR_RESET)"
	yarn start

# Build
build: ## Build for production
	@echo "$(COLOR_BLUE)Building for production...$(COLOR_RESET)"
	yarn build

# Code quality
lint: ## Run ESLint
	@echo "$(COLOR_YELLOW)Running ESLint...$(COLOR_RESET)"
	yarn lint

lint-fix: ## Run ESLint with auto-fix
	@echo "$(COLOR_YELLOW)Running ESLint with auto-fix...$(COLOR_RESET)"
	yarn lint:fix

format: ## Format code with Prettier
	@echo "$(COLOR_YELLOW)Formatting code...$(COLOR_RESET)"
	yarn format

format-check: ## Check code formatting
	@echo "$(COLOR_YELLOW)Checking code formatting...$(COLOR_RESET)"
	yarn format:check

# Combined tasks
check: ## Run all checks (lint + format check)
	@echo "$(COLOR_MAGENTA)Running all checks...$(COLOR_RESET)"
	yarn check

fix: ## Fix all issues (lint --fix + format)
	@echo "$(COLOR_MAGENTA)Fixing all issues...$(COLOR_RESET)"
	yarn fix

# Storybook
storybook: ## Start Storybook development server
	@echo "$(COLOR_BLUE)Starting Storybook...$(COLOR_RESET)"
	yarn storybook

build-storybook: ## Build Storybook static site
	@echo "$(COLOR_BLUE)Building Storybook...$(COLOR_RESET)"
	yarn build-storybook

# Cleanup
clean: ## Clean build artifacts
	@echo "$(COLOR_YELLOW)Cleaning build artifacts...$(COLOR_RESET)"
	rm -rf .next/ out/ storybook-static/ .yarn/cache .yarn/install-state.gz
	@echo "$(COLOR_GREEN)Done!$(COLOR_RESET)" 