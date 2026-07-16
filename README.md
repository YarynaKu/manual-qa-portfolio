# Manual QA Portfolio

QA portfolio built around testing [OrangeHRM](https://opensource-demo.orangehrmlive.com/), an open-source HR management demo application. Shows the full QA process — planning, test design, execution, defect reporting, and a growing layer of automation — including where and how AI tools were used to speed up the work, always with manual review on top.

## What's inside

| Folder | Contents |
|---|---|
| `docs/` | Test Approach, Requirements Traceability Matrix |
| `Test-Cases/` | 
- **`Functional_TestSuite.xlsx`** — Test Suite Overview, per-module test case sheets, Test Data, Defect Log, Execution Summary. This is the source of truth for execution status.
- **`OrangeHRM/`** — per-module markdown excerpts of the test cases above, for easy browsing on GitHub without opening the spreadsheet. |
| `Bug-Reports/` | Defect reports found while testing OrangeHRM |
| `ai-workflow-examples/` | Concrete before/after examples of using AI to draft test cases, with the raw AI output and my reviewed/corrected version side by side |
| `automation/playwright/` | Starter Playwright automation suite (Page Object Model) for the P0 smoke flows defined in the Test Approach |
| `.github/workflows/` | CI pipeline that runs the automated suite on push |
| `checklist.xlsx` | Manual smoke checklist template used for quick cross-browser/device spot-checks |

## Current coverage snapshot

The Test Approach defines the target state across all OrangeHRM modules. Actual coverage so far:

| Module | Status |
|---|---|
| Login / Authentication | Test cases + bug report |
| User Management (Admin) |  Test cases |
| Logout, Leave, PIM, Time, Recruitment, Performance, Dashboard |  Planned — scoped in Test Strategy, not yet executed |

## Tools & AI workflow

- **Test management:** Excel-based suite (`Functional_TestSuite.xlsx`) — TS/TC IDs, defect log, execution summary
- **Automation:** Playwright (JavaScript), Page Object Model
- **CI/CD:** GitHub Actions
- **Bug investigation:** Chrome DevTools (network, console, elements)
- **AI tools (Claude/ChatGPT):**
  - Drafting first-pass test case matrices from feature descriptions, then manually reviewing, correcting, and prioritizing — see [`ai-workflow-examples/`](./ai-workflow-examples) for a raw-output-vs-reviewed comparison
  - Drafting exploratory testing charters, executed and logged manually
  - Scaffolding Playwright test/page-object skeletons, fixed and validated by hand


