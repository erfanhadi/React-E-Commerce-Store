.DEFAULT_GOAL := help

.PHONY: help install dev build preview clean reinstall

# Package manager
PM := npm

##@ General

help: ## Show available commands
	@echo "Available commands:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
	awk 'BEGIN {FS = ":.*?## "}; {printf "  %-12s %s\n", $$1, $$2}'

##@ Development

install: ## Install dependencies
	$(PM) install

dev: ## Start Vite development server
	$(PM) run dev

preview: ## Preview production build locally
	$(PM) run preview

##@ Production

build: ## Build for production
	$(PM) run build

##@ Maintenance

clean: ## Remove generated build files
	rm -rf dist

reinstall: ## Remove dependencies and reinstall
	rm -rf node_modules
	$(PM) install
