# Change Log
This project adheres to [Semantic Versioning](http://semver.org/).

## 0.18.9 - 08/02/2024
- [PR #498](https://github.com/saddlebackdev/react-cm-ui/pull/498) / Merge Commit 199bdba
  - Fix the UI Docs after [#495](https://github.com/saddlebackdev/react-cm-ui/pull/495).
- [PR #503](https://github.com/saddlebackdev/react-cm-ui/pull/503) / Merge Commit 6b78a01
  - `[Dependabot]` Upgrade `ws` package.
- [4ff7662](https://github.com/saddlebackdev/react-cm-ui/commit/4ff76626c666b6aae59d7a7c4e4815da62ad3449)
  - Fix a style issue style with the nav links in UI Docs (also fallout from [#495](https://github.com/saddlebackdev/react-cm-ui/pull/495)) and also fix an issue with the <SectionalTabs> where the indicator was not going away if the `items` become empty on a props update (this was also causing a bug in UI docs, though likely it was a longstanding issue).

## 0.18.8 - 04/30/2024
- [PR #496](https://github.com/saddlebackdev/react-cm-ui/pull/496) / Merge Commit f7e7a34
  - Update `<PersonCoreMilestones>` and `<PersonPanel>` component examples for new **"Activate"** milestones.

## 0.18.7 - 04/01/2024
- [PR #487](https://github.com/saddlebackdev/react-cm-ui/pull/487) / Merge Commit b344606
  - `[Dependabot]` Upgrade `follow-redirects` package.
- [PR #488](https://github.com/saddlebackdev/react-cm-ui/pull/488) / Merge Commit 8a4955b
  - `[Dependabot]` Upgrade `webpack-dev-middleware` package.
- [PR #489](https://github.com/saddlebackdev/react-cm-ui/pull/489) / Merge Commit 247e5c3
  - `[Dependabot]` Upgrade `express` package.

## 0.18.6 - 02/13/2024
- [PR #485](https://github.com/saddlebackdev/react-cm-ui/pull/485) / Merge Commit a66da4b
  - `[Dependabot]` Upgrade `follow-redirects` package.

## 0.18.5 - 12/01/2023
- [PR #483](https://github.com/saddlebackdev/react-cm-ui/pull/483) / Merge Commit 9d2a1e8
  - Update Demo Page `<FiltersRail>` so that filter state can be altered and Clear and Apply controls are functional.

## 0.18.4 - 11/28/2023
- [PR #481](https://github.com/saddlebackdev/react-cm-ui/pull/481) / Merge Commit be2635f
  - Update Demo Page and Demo Drawer Filter Rails to add new `isFiltering` field to `filterOptions`.

## 0.18.3 - 11/17/2023
- [PR #478](https://github.com/saddlebackdev/react-cm-ui/pull/478) / Merge Commit 90bb4a8
  - Add example of using new `isRedacted` prop for the `<DatePickerInput>` component
- [PR #480](https://github.com/saddlebackdev/react-cm-ui/pull/480) / Merge Commit 87281d1
  - `[Dependabot]` Upgrade `sharp` package.

## 0.18.2 - 11/14/2023
- [PR #477](https://github.com/saddlebackdev/react-cm-ui/pull/477) / Merge Commit e442f9a
  - Add examples of using new `isRedacted` prop to show various form inputs in 'redacted' mode for displaying sensitive data.

## 0.18.1 - 11/09/2023
- [PR #474](https://github.com/saddlebackdev/react-cm-ui/pull/474) / Merge Commit 7d9954f
  - Add ability to have Apply and Clear buttons in the `<FiltersRail>` for Pages and Drawers.  Update Demo Page and Drawer to show this new capability.

## 0.18.0 - 11/06/2023
- [PR #476](https://github.com/saddlebackdev/react-cm-ui/pull/476) / Merge Commit 646bbdd
  - Add new `<Icon>` types `journey-candle`, `journey-crib`, `journey-crown`, `journey-manger`, and `journey-star`.

## 0.17.7-Hotfix1 - 11/06/2023
- [PR #476](https://github.com/saddlebackdev/react-cm-ui/pull/476) / Merge Commit 646bbdd
  - Add new `<Icon>` types `journey-candle`, `journey-crib`, `journey-crown`, `journey-manger`, and `journey-star`.

## 0.17.9 - 11/02/2023
- [PR #472](https://github.com/saddlebackdev/react-cm-ui/pull/472) / Merge Commit 2368d2b
 - `[Dependabot]` Upgrade `browserify-sign` package.
- [PR #473](https://github.com/saddlebackdev/react-cm-ui/pull/473) / Merge Commit aa20d13
 - Small fix on the `<DrowpdownButton>` example page.

## 0.17.8 - 10/19/2023
- [PR #467](https://github.com/saddlebackdev/react-cm-ui/pull/467) / Merge Commit 77d8219
  - Add an example of `<DropdownMenu>` using the new `stopPropagation` prop.  The example shows two `<DropdownMenu>` components placed
  within a clickable `<Card>` element that shows a visible counter that gets incremented when it is clicked.  The default `<DropdownMenu>`
  is observed to increment this counter, meaning the click event has propagated to the `<Card>`, whereas the `<DropdownMenu>` setting the
  new `stopPropagation` prop is observed not increment the counter.
- [PR #469](https://github.com/saddlebackdev/react-cm-ui/pull/469) / Merge Commit cf03b5b
 - `[Dependabot]` Upgrade `@babel/traverse` package.

## 0.17.7 - 09/07/2023
- [PR #461](https://github.com/saddlebackdev/react-cm-ui/pull/461) / Merge Commit 6aa16fb
  - Add example of `<SelectNext>` (powered by React Select v5) to the `<Select>` documentation page.

## 0.17.6 - 08/16/2023
- [PR #459](https://github.com/saddlebackdev/react-cm-ui/pull/459) / Merge Commit 5f35110
  - `<Icon>` documentation page - add `back10`, `forward10` and `pause` icons

## 0.17.5 - 07/24/2023
- [PR #454](https://github.com/saddlebackdev/react-cm-ui/pull/454) / Merge Commit 2409e7b
  - Update the documentation page for the `<Image>` component

## 0.17.4 - 07/24/2023
- [PR #452](https://github.com/saddlebackdev/react-cm-ui/pull/452) / Merge Commit 9eab586
  - Update Demo Page sample code to show the new capability of having a `<Select>` next to Action Bar Search and clean up the code
  - Add Demo Drawer sample code and add ability to open Demo Drawer to `<Drawer>` documentation page

## 0.17.3 - 07/19/2023
- [PR #451](https://github.com/saddlebackdev/react-cm-ui/pull/451) / Merge Commit 55e23c2
  - Further tweaks to the new YAML build pipeline

## 0.17.2 - 07/19/2023
- [PR #446](https://github.com/saddlebackdev/react-cm-ui/pull/446) / Merge Commit 604c299
  - `[Dependabot]` Upgrade `semver` package
- [PR #447](https://github.com/saddlebackdev/react-cm-ui/pull/447) / Merge Commit 6ff30b7
  - Fix some build issues and select ESLINT issues
  - `<Icon>` documentation pages
    - Main page
      - Replace malfunctioning `<DropdownButton>` with `<Radio pill>` for toggling between categorized and alphabetized displays
      - Fixed a small styling bug for the alphabetized display
      - Added new icon types
    - "Dev Sandbox"
      - Add Healthy Church epic features iconography example
  - `<Input>` "Dev Sandbox" documentation page - fix the `<Input>` Types examples (in particular the number input examples)
- [PR #448](https://github.com/saddlebackdev/react-cm-ui/pull/448) / Merge Commit 8ac9472
  - Upgrade `favicons-webpack-plugin` => `4.2.0`, the latest for Webpack 4
  - Add `sharp` (latest, `0.32.3`) as a direct dev dependency (to avoid issue where doing `npm install` would cause it to get downgraded)
  - Ran `npx browserslist@latest --update-db` to update `caniuse-lite`
- [PR #449](https://github.com/saddlebackdev/react-cm-ui/pull/449) / Merge Commit edf7011
  - Add YAML Build Pipeline Definition

## 0.17.1 - 02/22/2023
- [PR #428](https://github.com/saddlebackdev/react-cm-ui/pull/428) / Merge Commit ab185e4
  - Change references to &quot;CLASS&quot; milestones to &quot;DYP&quot; (Discover Your Purpose).

## 0.17.0 - 11/23/2022

#### Feature
- [PR #407](https://github.com/saddlebackdev/react-cm-ui/pull/407) / Merge Commit c02a055
  - Changed all the imports to use `@saddlebackchurch/react-cm-ui`.

## 0.16.0 - 11/11/2022

#### Feature
- [PR #404](https://github.com/saddlebackdev/react-cm-ui/pull/404) / Merge Commit 506e53a
  - Add documentation for `<ButtonGroup />` component.

## 0.15.5 - 10/24/2022

#### Feature
- Various package upgrades from GitHub Dependabot.

## 0.15.4 - 07/15/2022

#### Feature
- [PR #385](https://github.com/saddlebackdev/react-cm-ui/pull/385) / Merge Commit df9f205
  - Improve multi Select example

## 0.15.3 - 10/19/2021

#### Feature
- [PR #334](https://github.com/saddlebackdev/react-cm-ui/pull/334) / Merge Commit 22aa683
  - PersonCoreMilestones documentation improvements, including adding an interactive.

## 0.15.2 - 08/12/2021

#### Feature
- [PR #319](https://github.com/saddlebackdev/react-cm-ui/pull/319) / Merge Commit e1b82ee
  - New TimePicker doc changes.

## 0.15.1 - 06/14/2021

#### Feature
- [PR #300](https://github.com/saddlebackdev/react-cm-ui/pull/300) / Merge Commit f0cd0a0
  - Updated Demo Page and Demo Page's Filters Rail to demonstrate custom scrollbars and also fix some functionality/state-management issues.

## 0.15.0 - 04/16/2021

#### Bug
- [PR #279](https://github.com/saddlebackdev/react-cm-ui/pull/279) / Merge Commit 5fe25c4
  - PersonCoreMilestones documentation
  - SCSS import fixes

## 0.14.3 - 02/04/2021

#### Bug
- [PR #272](https://github.com/saddlebackdev/react-cm-ui/pull/272) / Merge Commit 233d95e
  - Fixes `node-gyp` build issues.

## 0.14.2 - 01/28/2021
- [PR #267](https://github.com/saddlebackdev/react-cm-ui/pull/267) / Merge Commit 8b2b641e716d828b6b8bf04c3e709e187785df97
  - DataGrid documentation bug fix.

## 0.14.1 - 01/12/2021
- [PR #265](https://github.com/saddlebackdev/react-cm-ui/pull/265) / Merge Commit e6a07b579852588157949b947b6815d4bead6953
  - Update Demo Page to showcase some enhancements to the Filters Drawer Nested Toggles and Multi Select components.

## 0.14.0 - 12/18/2020
- [PR #262](https://github.com/saddlebackdev/react-cm-ui/pull/262) / Merge Commit 0706f42ca8a9d78715c62d938fc86e8ac6f50223
  - Update Demo Page to showcase some enhancements to the Filters Drawer Nested Toggles and Multi Select components.

## 0.13.0 - 12/16/2020

#### Feature
- [PR #259](https://github.com/saddlebackdev/react-cm-ui/pull/259) / Merge Commit 18da8f65b924c8f3aadcf60287f44d012c603f4a
  - Update Prompt example.
- [PR #260](https://github.com/saddlebackdev/react-cm-ui/pull/260) / Merge Commit fcbd3f118804305b4fc4ab5c3d07ca77e1d10980
  - Add "view" Icon type.

## 0.12.0 - 12/09/2020

#### Feature
- [PR #252](https://github.com/saddlebackdev/react-cm-ui/pull/252) / Merge Commit d835fe74d94a19f31d83fcf7cd99ba703b03151f
  - New Typography styles documentation.

## 0.11.0 - 10/01/2020

#### Feature
- [PR #228](https://github.com/saddlebackdev/react-cm-ui/pull/228) / Merge Commit 00b72e09f8c1835568b258c4aff4bfa320f71bec
  - Cleaned up Page components Demo a bit.
- [PR #230](https://github.com/saddlebackdev/react-cm-ui/pull/230) / Merge Commit e428f5acc483676faa2d8880d9747891b11f0342
  - Added a new fourth level navigation using our Sectional Tabs component in the root layout.

## 0.10.2 - 10/01/2020

#### Bug
- [PR #216](https://github.com/saddlebackdev/react-cm-ui/pull/216) / Merge Commit 3192b94644166ff9e0bf67f0d7f9fd843ecb3696
    - Add a new SubNavigation component to handle all fourth level items in the `./docs/src/app/navigationConstants.js` file.
    - Added all the necessary fourth level routes.
    - Added a new Webpack production script: `npm run start:prod` to help with production issues.
    - Added the Webpack Terser Plugin to overwrite Webpack's default minimization and disable mangling names.
      - Person Panel documentation works now!

## 0.9.1 - 10/01/2020

#### Feature
- [PR #214](https://github.com/saddlebackdev/react-cm-ui/pull/214) / Merge Commit 06c7a7236f9f6bbf6744e9cd17d714d95f198cbd
    - Added Popover documentation.
    - Fixed PersonPanel documentation to reflect new PersonCoreMilestone changes.

## 0.10.1 - 09/28/2020

### Feature
- [PR #207](https://github.com/saddlebackdev/react-cm-ui/pull/207) / Merge Commit cb5233b6d19a73cd1892c172aaf6b375f2bc3014
  - Updated Radio documentation and fixed some ESLINT issues.
- [PR #209](https://github.com/saddlebackdev/react-cm-ui/pull/209) / Merge Commit 03dd9e479802c681d82dedd9962421b8eae759eb
  - Added `autoScrollSelection` props description.

## 0.10.0 - 09/16/2020

#### Feature
- [PR #192](https://github.com/saddlebackdev/react-cm-ui/pull/192) / Merge Commit 8544d9b3119124f346b10a0d122b34cfb388f484
    - DataGrid documentation
    - New ComponentVersionIdentifier
    - Updated Example Component
    - Fixed some ActionBar and Radio documentation issues.
- [PR #194](https://github.com/saddlebackdev/react-cm-ui/pull/194) / Merge Commit 538b8f2defdac395b734ef4934d88fbb31e4a330
  - Updated `moment-timezone`
  - Fixed ComponentVersionIdentifier component.
  - Updated DurationPicker documentation.
- [PR #195](https://github.com/saddlebackdev/react-cm-ui/pull/195) / Merge Commit 6a05e68ad5ba728e2746d82bb61d71fd3b54d2af
  - Added SectionalTabs and BreadCrumbs documentation.
  - Updated DropdownButton documentation.
  -

#### Bug Fix
- [PR #198](https://github.com/saddlebackdev/react-cm-ui/pull/198) / Merge Commit 959638982efafe31be9e7989b9211a0d966a1612
  - Fixed fourth level navigation.
- [PR #199](https://github.com/saddlebackdev/react-cm-ui/pull/199) / Merge Commit aa7225905a0bfc0003463fcd1bfd2faae99436d9
  - build(deps): bump bl from 4.0.2 to 4.0.3 in /docs
- [PR #200](https://github.com/saddlebackdev/react-cm-ui/pull/200) / Merge Commit 20544222667ff5624ed388fe6b9531ce60a0e84c
  - build(deps-dev): bump node-sass from 4.12.0 to 4.13.1 in /docs

## 0.9.0 - 08/21/2020

#### Feature
- [PR #187](https://github.com/saddlebackdev/react-cm-ui/pull/187) / Merge Commit 8f98e876211708240f3a246eb995f8656b193e03
    - Reorganized Components In `./docs`.

#### Bug Fix
- [PR #188](https://github.com/saddlebackdev/react-cm-ui/pull/188) / Merge Commit d76c61b7b3fd5aad03c82c3c670b187334e0c4da
    - Fixed a Eslint `react-dom` import error.

## 0.8.3 - 08/06/2020

#### Bug Fix
- [PR #183](https://github.com/saddlebackdev/react-cm-ui/pull/183) / Merge Commit 4c1ece3ec379cb95bc2564dffb5ba865854d1435
    - bump elliptic from 6.5.2 to 6.5.3 in /docs

## 0.8.2 - 07/31/2020

#### Feature
- [PR #181](https://github.com/saddlebackdev/react-cm-ui/pull/181) / Merge Commit 2621c598c6703dbe4fe2136fd9e644d20ef8b672
    - Updated **Modal** and **Prompt** props documentation.

## 0.8.1 - 07/16/2020

#### Feature
- [PR #178](https://github.com/saddlebackdev/react-cm-ui/pull/178) / Merge Commit a008bdf9155c071bf5bff7a8ba95d1c2c7c7382c
    - bump lodash from 4.17.15 to 4.17.19 in /docs

## 0.8.0 - 07/08/2020

#### Feature
- [PR #173](https://github.com/saddlebackdev/react-cm-ui/pull/173) / Merge Commit 66ff8c3adb9f6049e1286278c54737c07ea898c7
    - Moved `./src/global/images` to `./src/images`.
    - Added a favicon SVG.

#### Bug Fix
- [PR #173](https://github.com/saddlebackdev/react-cm-ui/pull/173) / Merge Commit 66ff8c3adb9f6049e1286278c54737c07ea898c7
    - Fixed **PersonPanel** component imports and updated its documentation.

## 0.7.0 - 06/26/2020

#### Feature
- [PR #147](https://github.com/saddlebackdev/react-cm-ui/pull/147) / Merge Commit 03ee127a7823367e0f7e26e652b941549a62d9fe
    - New **PersonPanel** documentation.
- [PR #159](https://github.com/saddlebackdev/react-cm-ui/pull/159) / Merge Commit 5d3de5da2e6fdcbfdf0e4a78e7136d6a236b4cb5
    - Refactored **Table** documentation using new documentation helper components.
- [PR #161](https://github.com/saddlebackdev/react-cm-ui/pull/161) / Merge Commit 983f432c5928667f6e1f9981ef6da58a13e3eb95
    - Added `theme` to the global `window` object.
- [PR #162](https://github.com/saddlebackdev/react-cm-ui/pull/162) / Merge Commit 209805981c80a4381d7f8bfc1879f50eec4ef92c
    - New example and api components to make our lives all a little more simple.
- [PR #163](https://github.com/saddlebackdev/react-cm-ui/pull/163) / Merge Commit a10ead45ace696c891d8d49ecd50d42c8cbef637
    - Changed lanuage and props from `disabled` to `disable`.

#### Bug Fix
- [PR #158](https://github.com/saddlebackdev/react-cm-ui/pull/158) / Merge Commit 8325c79b22c20dbe07583a666ca20ab4f857a304
    - Fixed navigation issue on **Page/Drawer**.
- [PR #161](https://github.com/saddlebackdev/react-cm-ui/pull/161) / Merge Commit 983f432c5928667f6e1f9981ef6da58a13e3eb95
    - Fixed **DropdownButton's** sub navigation routes.

## 0.6.1 - 06/09/2020

#### Feature
- [PR #153](https://github.com/saddlebackdev/react-cm-ui/pull/153) / Merge Commit 28eceeb606f2d47aa2aa8f6fe05a99ee4451b616
    - Fix image paths for deployed CM UI Docs website.

## 0.6.0 - 06/02/2020

#### Feature
- [PR #141](https://github.com/saddlebackdev/react-cm-ui/pull/141) / Merge Commit 9a9e63054f40df0db2b8461f2c270680b644215d
    - Documentation Navigation Updates
- [PR #150](https://github.com/saddlebackdev/react-cm-ui/pull/150) / Merge Commit 8bd599326be714d493bea953a0c6603732176a8d
    - Added and Fixed Data Type - Person Icons.

## 0.5.1 - 05/11/2020

#### Bug Fix
- [PR #138](https://github.com/saddlebackdev/react-cm-ui/pull/138) / Merge Commit 0d42cc33ef08afc1416336eff809017b019432b2
    - Fixed docs builds error.

## 0.5.0 - 04/28/2020

- Added new component category, Inputs.

## 0.4.0 - 04/14/2020

- Added new component category, Data Displays.

## 0.3.1 - 03/05/2020

- A gap between icon categories, Actions and Miscellaneous, are now closed.

## 0.3.0 - 02/18/2020

- Refactored navigation's items to the place components's documentation into an Atomic structure.
- Refactored home.

## 0.2.0 - 01/31/2020

- Started the **Page** sub component's documentation pages by displaying their respective props.
