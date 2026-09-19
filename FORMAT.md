# Aria Workplace team playbooks

Aria Workplace loads this repository's `catalog.json` into **+ → Teams → Explore**.

The catalog format is `aria.catalog` version 1. Each team entry must use safe relative paths under `teams/<slug>/`.

A playbook is one Markdown file with YAML frontmatter:

```md
---
botmrr: 1
id: example-team
release: 1.0.0
name: Example Team
tagline: The outcome in one sentence.
---

# Example Team

Give this file to your Chief of Staff.

## Activation

## Mission

## Outcomes

## Connections

## Team

## Chief of Staff

## Completion rule
```

Required body sections are Activation, Mission, Outcomes, Connections, Team, Chief of Staff, and Completion rule.

Imports land disabled. Connections stay off until a person approves them, and routines arrive paused. Playbooks never carry credentials, conversations, permissions, memory, or computer access.
