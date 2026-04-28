# Guide Backlog

## Goal

Build a complete handwritten guide that helps a new modder go from orientation to safe, repeatable edits,
while generated pages stay the canonical data reference.

## Priority Labels

- **now** — critical foundation pages needed for flow
- **next** — high-value pages that improve practical usability
- **later** — quality and completeness pages

---

## Page Roadmap

### now

#### 1. Start Here: What This Site Is For
- **File:** `guide/what-is-se1-game-data.md`
- **Done when:**
  - explains audience, scope, and non-goals
  - explains generated vs handwritten split
  - links to Guide, Catalog, Files, Reference entry points

#### 2. Modding Workflow End-To-End
- **File:** `guide/modding.md`
- **Done when:**
  - has one concrete end-to-end workflow
  - has a pre-change and post-change checklist
  - includes a first safe change example

#### 3. File Formats And Data Lifecycle
- **File:** `guide/se1-file-format.md`
- **Done when:**
  - explains archive structure and serialization in practical terms
  - explains where generated docs come from
  - explains why row counts and metadata matter

#### 4. Shadow Empire Context
- **File:** `guide/shadow-empire.md`
- **Done when:**
  - concise context only
  - clearly states project is unofficial
  - points users to practical guide pages next

---

### next

#### 5. How To Navigate Generated Docs
- **File:** `guide/navigating-docs.md` _(new)_
- **Done when:**
  - clearly distinguishes Catalog vs Files vs Reference
  - teaches how to read type metadata and field tables fast
  - includes 2–3 real navigation examples

#### 6. Notes Strategy (_notes.md)
- **File:** `guide/notes-strategy.md` _(new)_
- **Done when:**
  - defines what belongs in notes vs guide
  - defines required note sections
  - defines writing style and evidence expectations

#### 7. Common Task Playbooks
- **File:** `guide/playbooks.md` _(new)_
- **Done when:**
  - has at least 3 short recipes
  - each recipe links to concrete reference pages
  - each recipe includes validation checks

#### 8. Validation And Safety Checks
- **File:** `guide/validation.md` _(new)_
- **Done when:**
  - lists risky edit patterns
  - gives row-count and ID sanity checks
  - gives rollback guidance

---

### later

#### 9. Troubleshooting
- **File:** `guide/troubleshooting.md` _(new)_
- **Done when:**
  - symptom-to-cause format
  - points to first inspection location per symptom
  - includes known edge cases

#### 10. Glossary
- **File:** `guide/glossary.md` _(new)_
- **Done when:**
  - defines core domain terms and abbreviations (OOB, TOE, SFType, LIS, UDS, …)
  - avoids duplicating generated content
  - links to representative reference pages

#### 11. External Resources
- **File:** section in `guide/modding.md` or `guide/resources.md` _(new)_
- **Done when:**
  - links are grouped by purpose
  - each link has a one-line why-this-matters note
  - stale links removed

---

## Writing Checklist (Use For Every Guide Page)

- [ ] states why the reader should care
- [ ] states required context before starting
- [ ] gives step-by-step practical flow
- [ ] warns about common mistakes
- [ ] ends with a validation checklist
- [ ] links to the next page in the journey
- [ ] keeps generated facts in reference pages, not duplicated in prose

---

## Notes Coverage Targets (First Wave)

### Library-level notes

| Library | File |
| --- | --- |
| Root | `reference/root/_notes.md` |
| SE_Data | `reference/SE_Data-4/_notes.md` |
| SE_Random | `reference/SE_Random-2/_notes.md` |
| SE_Model | `reference/SE_Model-11/_notes.md` |
| SE_Org | `reference/SE_Org-10/_notes.md` |

### High-value type pages

| Table | File |
| --- | --- |
| Globals | `reference/root/data-tables/Globals-58/_notes.md` |
| Combat Calculations | `reference/root/rules/Combat-Calculations-9/_notes.md` |
| Flex Model Type | `reference/SE_Data-4/data-tables/Flex-Model-Type-225/_notes.md` |
| Regime Models | `reference/SE_Data-4/data-tables/Regime-Models-228/_notes.md` |
| Flex Tech Types | `reference/SE_Data-4/data-tables/Flex-Tech-Types-190/_notes.md` |

### Notes Template (per `_notes.md`)

```md
## Notes

### Why This Page Matters
...

### Safe To Edit
...

### Risky To Edit
...

### Field Caveats
...

### Related Tables
...

### Validation After Changes
...
```

---

## Milestones

| # | Name | Includes |
| --- | --- | --- |
| 1 | Foundation Flow | Pages 1–4 with internal links between them |
| 2 | Practical Usability | Pages 5–8 (navigation, notes, playbooks, safety) |
| 3 | Completeness | Pages 9–11 (troubleshooting, glossary, resources) |

---

## Definition Of Done For Guide v1

- [ ] a new reader can follow a start-to-finish path without guessing
- [ ] each key workflow page includes validation steps
- [ ] top priority reference pages have notes with actionable guidance
- [ ] no page is only a link dump without practical instructions
