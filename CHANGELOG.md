# Change Log
This project adheres to [Semantic Versioning](http://semver.org/).

## 10.7.0
_September 7, 2023_
- Add `<SelectNext>` component, powered by React Select v5.  [PR #461](https://github.com/saddlebackdev/react-cm-ui/pull/461)

## 10.6.15
_August 16, 2023_
- `<Icon>` - add `back10`, `forward10` and `pause` icons.  [PR #459](https://github.com/saddlebackdev/react-cm-ui/pull/459)
- Build pipeline updated to use Ubuntu agent and add NPM package caching.  [PR #460](https://github.com/saddlebackdev/react-cm-ui/pull/460).

## 10.6.14
_August 8, 2023_
- `<DatePickerInput>` - add the ability to hide the date picker calendar control if user manually enters a value.  [PR #458](https://github.com/saddlebackdev/react-cm-ui/pull/458)

## 10.6.13
_July 25, 2023_
- Fix regression with CSS import/export in `<Image>` component.  [PR #457](https://github.com/saddlebackdev/react-cm-ui/pull/457)

## 10.6.8-hotfix-1
_July 25, 2023_
- Fix a bug in `<PhoneInput>` component where the country flag icons were not being rendered in Safari browsers.  [PR #456](https://github.com/saddlebackdev/react-cm-ui/pull/456)

## 10.6.12
_July 25, 2023_
- Add ability suppress CSS background image on `<Image>` component.  [PR #454](https://github.com/saddlebackdev/react-cm-ui/pull/454)
- Fix a bug in `<PhoneInput>` component where the country flag icons were not being rendered in Safari browsers.  [PR #455](https://github.com/saddlebackdev/react-cm-ui/pull/455)

## 10.6.11
_July 24, 2023_
- Add the ability to have a `<Select>` next to the Action Bar Search (to designate the context/target for the search term).  [PR #452](https://github.com/saddlebackdev/react-cm-ui/pull/452)
- Fix some misconfigured Prop Type declarations, leading to console errors in consuming projects.  [PR #453](https://github.com/saddlebackdev/react-cm-ui/pull/453)

## 10.6.10
_July 19, 2023_
- Further tweaks to the new YAML build pipeline.  [PR #451](https://github.com/saddlebackdev/react-cm-ui/pull/451)

## 10.6.9
_July 19, 2023_
- `[Dependabot]` Upgrade `tough-cookie` and `jsdom` packages. [PR #443](https://github.com/saddlebackdev/react-cm-ui/pull/443)
- Various code fixes and small enhancements.  [PR #447](https://github.com/saddlebackdev/react-cm-ui/pull/447)
  - `<ActionBar>` ( [`src/surfaces/actionBar/actionBar.jsx`](/src/surfaces/actionBar/actionBar.jsx) ) - Fix some eslint issues
  - `<Container>` ( [`src/layout/container/container.jsx`](/src/layout/container/container.jsx) ) - Fix a compilation issue
  - `<Icon>` ( [`src/dataDisplay/icon/icon.jsx`](/src/dataDisplay/icon/icon.jsx) ) - Add new types `giving-saddleback`, `insights` and `journey`
  - `<Input>` ( [`src/inputs/input/input.jsx`](/src/inputs/input/input.jsx) )
    - Add some additional keys to be allowed for inputs of type number
    - Refactor number input allowed key check to use a `switch` statement instead of a long compound Boolean expression
    - Some ESLINT fixes and small code tweaks
- Add YAML Build Pipeline Definition.  [PR #449](https://github.com/saddlebackdev/react-cm-ui/pull/449)
- `[Dependabot]` Upgrade `word-wrap` package.  [PR #450](https://github.com/saddlebackdev/react-cm-ui/pull/450)

## 10.6.8
_June 23, 2023_
- Added defensive check in `<DropdownMenu />` on `parentContainer` before de-referencing it to call `contains()` method in `onClickOutside()` function. [PR #440](https://github.com/saddlebackdev/react-cm-ui/pull/440)
- Added new icon type `scan-id`.  [PR #432](https://github.com/saddlebackdev/react-cm-ui/pull/441)

## 10.6.7
_May 18, 2023_
- Added ability to set the `<DropdownMenu />` props from the `<DropdownButton />` component.  [PR #438](https://github.com/saddlebackdev/react-cm-ui/pull/438)

## 10.6.6
_April 18, 2023_
- Add support for large file uploads to `<Input />`.  [PR #435](https://github.com/saddlebackdev/react-cm-ui/pull/435)
- Various package upgrades from GitHub Dependabot.

## 10.6.5
_March 30, 2023_
Add new icon types `element-boolean` and `quiz`.  [PR #432](https://github.com/saddlebackdev/react-cm-ui/pull/432)


## 10.6.4
_February 22, 2023_
- Change references to &quot;CLASS&quot; milestones to &quot;DYP&quot; (Discover Your Purpose).  [PR #428](https://github.com/saddlebackdev/react-cm-ui/pull/428)

## 10.6.3
_January 17, 2023_
- Revert dependabot update of `react-phone-number-input` ([PR #423](https://github.com/saddlebackdev/react-cm-ui/pull/423)) because it broke our customized phone number input. [24575bc](https://github.com/saddlebackdev/react-cm-ui/commit/24575bc7ec334f2b5fe93f6e132550f29f8b0f7a)

## 10.6.2
_January 17, 2023_
- [PR #418](https://github.com/saddlebackdev/react-cm-ui/pull/418)
  - Added `alwaysShowRequiredIndicator` prop to several input components to override default behavior of removing the required field indicator (usually a red asterisk near the input control's label) once a value is supplied.
  - By setting `alwaysShowRequiredIndicator` to `true`, the required field indicator should always remain, regardless of whether the input is populated or not.
- Various package upgrades from GitHub Dependabot.

## 10.6.1
_November 23, 2022_

### Core
- Added `inputMode` prop to `<Input />` component.  [PR #407](https://github.com/saddlebackdev/react-cm-ui/pull/407)


## 10.6.0
_November 11, 2022_

### Core
- Added `<ButtonGroup />` component and re-export Material UI `Container` component as `<MUIContainer />`.  [PR #404](https://github.com/saddlebackdev/react-cm-ui/pull/404)

## 10.5.5
_October 25, 2022_

### Core
- Yet another bug fix in the TypeScript declarations for `DrawerDataGroups`.  Hopefully this does the trick!  [38c2994](https://github.com/saddlebackdev/react-cm-ui/commit/38c29944ceb7a111cfc121158999e7368bee56ca)

## 10.5.4
_October 24, 2022_

### Core
- Further bug fix in the TypeScript declarations for `DrawerDataGroups`.  [d59ebf9](https://github.com/saddlebackdev/react-cm-ui/commit/d59ebf92f2757f9f7559a95d802161d4b7570800)

## 10.5.3
_October 24, 2022_

### Core
- Bug fix in the TypeScript declarations for `DrawerDataGroups`.  [PR #394](https://github.com/saddlebackdev/react-cm-ui/pull/394)
- Various package upgrades from GitHub Dependabot.

## 10.5.2
_August 23, 2022_

### Core
- Bug fix in `<Icon />` component; CLASS 301 icon was incorrect (it was a duplicate of the CLASS 201 icon). [PR #391](https://github.com/saddlebackdev/react-cm-ui/pull/391)

## 10.5.1
_August 4, 2022_

### Core
- Changed to have `@saddlebackchurch` namespace [af738ee](https://github.com/saddlebackdev/react-cm-ui/commit/af738eed05ec2d3458b262db4e2fa3728f3a4482)

## 10.5.0
_August 4, 2022_

### Core
- Added CardDeprecatedHeader export [c84d312](https://github.com/saddlebackdev/react-cm-ui/commit/c84d3120052e35f79992ebb3d1fd957d301e1a52)

## 10.5.0
_August 2, 2022_

### Core
- Added MUI Card and Paper Components [PR #390](https://github.com/saddlebackdev/react-cm-ui/pull/390)

## 10.4.7
_July 15, 2022_

### Core
- Fix styling on multi Select chips [PR #385](https://github.com/saddlebackdev/react-cm-ui/pull/385)

### Docs
- Improve multi Select example [PR #385](https://github.com/saddlebackdev/react-cm-ui/pull/385)

## 10.4.6
_June 28, 2022_

### Core
- Misc. fixes [PR #382](https://github.com/saddlebackdev/react-cm-ui/pull/382)
  - Calmed Button Deprecated Warnings Down
  - FiltersDrawer Dropdown Value PropType Fix
  - TableHeaderCell Style Issue
- Fix `disabled` vs. `disable` in `<DropdownMenuOption />` [PR #383](https://github.com/saddlebackdev/react-cm-ui/pull/383)

## 10.4.3-hotfix
_June 17, 2022_

### Core
- Added The Ability Have A Custom Gradient On An Icon. [PR #379](https://github.com/saddlebackdev/react-cm-ui/pull/379)
  - Added more TS configuration so we can now fully write in TS.
  - Added Icon types.

### Docs
- Converted Icon's examples to use the new patterns [PR #379](https://github.com/saddlebackdev/react-cm-ui/pull/379)
  - Exporting `propTypes` from the Button component fixes the API documentation page.

## 10.4.5
_June 9, 2022_

### Core
- Button `disabled` Bug Fix. [PR #378](https://github.com/saddlebackdev/react-cm-ui/pull/378)
- Added The Ability Have A Custom Gradient On An Icon. [PR #379](https://github.com/saddlebackdev/react-cm-ui/pull/379)
  - Added more TS configuration so we can now fully write in TS.
  - Added Icon types.
- Added Button Types. [PR #380](https://github.com/saddlebackdev/react-cm-ui/pull/380)

### Docs
- Converted Icon's examples to use the new patterns [PR #379](https://github.com/saddlebackdev/react-cm-ui/pull/379)
  - Exporting `propTypes` from the Button component fixes the API documentation page.
- Fixed Docs' Button API Page. [PR #380](https://github.com/saddlebackdev/react-cm-ui/pull/380)

## 10.4.4
_May 26, 2022_

### Core
- Changed Drawer's `onClickOutside` prop to `shouldCloseOnClickOutside`. [PR #376](https://github.com/saddlebackdev/react-cm-ui/pull/376)

### Docs
- Input fields ExampleInputMask not working correctly. [PR #375](https://github.com/saddlebackdev/react-cm-ui/pull/375)

## 10.4.3
_May 25, 2022_

### Core
- Moved Drawer's `onClickOutside` event listener. [PR #374](https://github.com/saddlebackdev/react-cm-ui/pull/374)

## 10.4.2
_May 3, 2022_

### Core
- Check on Table's this.tableRef. [PR #373](https://github.com/saddlebackdev/react-cm-ui/pull/373)

## 10.4.1
_April 18, 2022_

### Core
- Move React and React-DOM to devDependencies and added React to peerDependencies . [PR #343](https://github.com/saddlebackdev/react-cm-ui/pull/343)

## 10.3.14
_April 18, 2022_

### Core
- Checkboxes disabled with disable can be still be clicked. [PR #367](https://github.com/saddlebackdev/react-cm-ui/pull/367)
- Add error prop support for Select component. [PR #371](https://github.com/saddlebackdev/react-cm-ui/pull/371)

### Docs
- Add error prop support for Select component. [PR #371](https://github.com/saddlebackdev/react-cm-ui/pull/371)

## 10.3.13
_March 4, 2022_

### Core
- Import Fixes. [ea848cd](https://github.com/saddlebackdev/react-cm-ui/commit/ea848cdc02f20aece855ad91f2ac39f42bccbdd2)

## 10.3.12
_March 4, 2022_

- Fix Input (of `type="number"`) so that some other useful keyboard keys and key combinations still work. [PR #366](https://github.com/saddlebackdev/react-cm-ui/pull/366)
  - This inadvertently regressed in 10.3.7 ( [PR #353](https://github.com/saddlebackdev/react-cm-ui/pull/353) ) as part of an attempt to prevent invalid input by using the `onKeyDown` event to cancel keystrokes deemed not valid for entering a number.  That attempt was, to say the least, a bit overzealous.  This fix should make the number Input much more functional now.

## 10.3.9-hotfix-2
_March 4, 2022_

### Core
- Import Fixes. [ea848cd](https://github.com/saddlebackdev/react-cm-ui/commit/ea848cdc02f20aece855ad91f2ac39f42bccbdd2)

## 10.3.9-hotfix
_March 4, 2022_

### Core
- Fix Input (of `type="number"`) so that some other useful keyboard keys and key combinations still work. [PR #366](https://github.com/saddlebackdev/react-cm-ui/pull/366)
  - This inadvertently regressed in 10.3.7 ( [PR #353](https://github.com/saddlebackdev/react-cm-ui/pull/353) ) as part of an attempt to prevent invalid input by using the `onKeyDown` event to cancel keystrokes deemed not valid for entering a number.  That attempt was, to say the least, a bit overzealous.  This fix should make the number Input much more functional now.

## 10.3.11
_March 02, 2022_

### Core
- Removed `.scss` extension. [7c0737e](https://github.com/saddlebackdev/react-cm-ui/commit/7c0737ee120c1390bee8655f4077923424277e48)

## 10.3.10
_March 02, 2022_

### Core
- Remove console warnings about use of disabled prop. [PR #362](https://github.com/saddlebackdev/react-cm-ui/pull/362)
- Removed Input's `showRequiredIndicator` component state [PR #365](https://github.com/saddlebackdev/react-cm-ui/pull/365)

### Docs
- Eslint clean up. [PR #359](https://github.com/saddlebackdev/react-cm-ui/pull/359)

## 10.3.9
_February 15, 2022_

### Core
- Mobile ActionBar menu drawer now closes on an option click. [PR #359](https://github.com/saddlebackdev/react-cm-ui/pull/359)
- ESLINT is back baby! [PR #361](https://github.com/saddlebackdev/react-cm-ui/pull/361)

## 10.3.8
_February 04, 2022_

### Core
- Fix to undefined `PropType` and removal of a prop warning.

## 10.3.7
_February 04, 2022_

### Core
- Fix data-testid issue for <DataGroups>. [PR #354](https://github.com/saddlebackdev/react-cm-ui/pull/354)
- Warning message is not displaying a properly format. [PR #353](https://github.com/saddlebackdev/react-cm-ui/pull/353)
- ForwardedRefs, Button Type Prop, and Select Bug Fixes. [PR #356](https://github.com/saddlebackdev/react-cm-ui/pull/356)
- close Actions Bar Drawer after option is clicked [PR #355](https://github.com/saddlebackdev/react-cm-ui/pull/355)

### Docs
- Updated Input Documentation. [PR #353](https://github.com/saddlebackdev/react-cm-ui/pull/353)

## 10.3.6
_January 27, 2022_

### Core
- Added `onFocus` function prop To Action Bar Search component.  [PR #352](https://github.com/saddlebackdev/react-cm-ui/pull/352)
  - This is to allow consumers to be notified when the search input is focused (e.g. using `autoFocus` prop) and, if necessary, make adjustments to the content area (esp. at smaller viewport widths).

## 10.3.5
_January 20, 2022_

### Core
- Fixed Modal TS types.  [9df63a8](https://github.com/saddlebackdev/react-cm-ui/commit/9df63a8ca6f0740b536daebb1bc8de9599ffc057)

## 10.3.4
_January 19, 2022_

### Core
- Added data-testid To Drawer Container.  [PR #351](https://github.com/saddlebackdev/react-cm-ui/pull/351)
- Add some data-testid support for <ModalDeprecated> and add Close Button data-testid to <Modal>  [PR #349](https://github.com/saddlebackdev/react-cm-ui/pull/349)

## 10.3.3
_January 12, 2022_

### Core
- Chip, Drawer, Label, and Table type fixes.  [PR #346](https://github.com/saddlebackdev/react-cm-ui/pull/346)
- DatePickerInput enhancements.  [PR #347](https://github.com/saddlebackdev/react-cm-ui/pull/347)
  - Add `fluid` prop to `<DatePickerInput>`
  - Add `dataTestId` support for `<DatePickerInput>` and add a unit test fixture for it, testing basic render and `onChange` event handling.
  - Also had to add `dataTestId` support for `<Input>`.
  - When you specify a `dataTestId` for `<DatePickerInput>` it actually is passed into the `<Input>` and ends up as a `data-testid` attribute on the underling HTML `<input>` element.
  - The rationale here is that the likeliest unit testing scenario (for higher level molecules and organisms using `<DatePickerInput>`) is needing to be able to trigger a change event and specify a value to the `<DatePickerInput>` directly (i.e. not attempting to interact with the calendar control).

### Docs
- DatePickerInput enhancements.  [PR #347](https://github.com/saddlebackdev/react-cm-ui/pull/347)
  - Refactor/modernize the documentation for `<DatePickerInput>`
  - Divide into main page, Dev Sandbox section, and API section
  - Move all examples into separate component files and refactor them to use functional style.

## 10.3.2
_January 05, 2022_

### Core
- Minor Table fixes.  [PR #345](https://github.com/saddlebackdev/react-cm-ui/pull/345)
  - Added scroll autoHide
  - Fixed table size header cell styling.
  - Moved Table SCSS to JSS.

### Docs
- Minor Table updates to docs.  [PR #345](https://github.com/saddlebackdev/react-cm-ui/pull/345)
## 10.3.1
_December 20, 2021_

### Core
- Added a defensive check in PhoneInputCountryDropwdown.  [PR #344](https://github.com/saddlebackdev/react-cm-ui/pull/344)

## 10.3.0
_November 29, 2021_

### Core
- Added MUI Chip and Deprecated Label. [PR #341](https://github.com/saddlebackdev/react-cm-ui/pull/341)
- Added MUI Box. [PR #340](https://github.com/saddlebackdev/react-cm-ui/pull/340)
- Added MUI Timeline. [PR #339](https://github.com/saddlebackdev/react-cm-ui/pull/339)
- Replaced Droid Serif with Georgia to help with load time. [PR #336](https://github.com/saddlebackdev/react-cm-ui/pull/336)
- Fixes Sectional Tabs tab indicator styling issues. [PR #335](https://github.com/saddlebackdev/react-cm-ui/pull/335)

### Docs
- Added MUI Chip documentation. [PR #341](https://github.com/saddlebackdev/react-cm-ui/pull/341)
- Added MUI Timeline documentation. [PR #339](https://github.com/saddlebackdev/react-cm-ui/pull/339)
- Update Sectional Tabs documentation. [PR #335](https://github.com/saddlebackdev/react-cm-ui/pull/335)

## 10.2.5
_November 15, 2021_

### Core
- Fixed Image `type` defaultProps. [PR #342](https://github.com/saddlebackdev/react-cm-ui/pull/342)

## 10.2.4
_November 9, 2021_

### Core
- Fixed Image `type` prop. [PR #337](https://github.com/saddlebackdev/react-cm-ui/pull/337)
- Fixed PhoneInput flags not being displayed. [PR #338](https://github.com/saddlebackdev/react-cm-ui/pull/338)

## 10.2.3
_October 19, 2021_

### Core
- Fix some styling issues on PersonCoreMilestones component. [PR #334](https://github.com/saddlebackdev/react-cm-ui/pull/334)

### Docs
- PersonCoreMilestones documentation improvements, including adding an interactive. [PR #334](https://github.com/saddlebackdev/react-cm-ui/pull/334)

## 10.2.2
_September 24, 2021_

### Core
- Action Bar Mobile Search Auto Focus. [PR #333](https://github.com/saddlebackdev/react-cm-ui/pull/333)

## 10.2.1
_September 20, 2021_

### Core
- Dropdown Button enhancements and fixes. [PR #331](https://github.com/saddlebackdev/react-cm-ui/pull/331)
  - New DropdownButton.Heading and DropdownButton.Divider components.
  - Misc. styling fixes.

## 10.2.0
_September 16, 2021_

### Core
- Button gap closures. [PR #325](https://github.com/saddlebackdev/react-cm-ui/pull/325)
- List and Divider Chagnes. [PR #327](https://github.com/saddlebackdev/react-cm-ui/pull/327)
  - List is now wrapping Material-UI's List and Divider components. You will need to use the prop `designVersion` and pass a value of `2` to be able to use MUI.
- MUI Skeleton, Button, List and ActionBar fixes, and Popover Update. [PR #330](https://github.com/saddlebackdev/react-cm-ui/pull/330)

### Docs
- Button doc update. [PR #325](https://github.com/saddlebackdev/react-cm-ui/pull/325)

## 10.1.6
_September 8, 2021_

### Core
- Theme Palette update. [PR #324](https://github.com/saddlebackdev/react-cm-ui/pull/324)
  - Add `action.disabledBackground`
  - Change `mode` to `type` for better compatibility with Material UI v4.x (versus 5.x)
  - Update Material UI core and style dependency versions.
- PersonPanel updates. [PR #329](https://github.com/saddlebackdev/react-cm-ui/pull/329)
  - Add new `showSelectButton` prop to PersonPanelDetails to optionally suppress the Select button.
  - Make showing Person ID in PersonPanelSummary more defensive.
- Improve Jest Test environment to remove certain console errors during test runs.  [PR #328](https://github.com/saddlebackdev/react-cm-ui/pull/328)
- Various dependency upgrades to address vulnerabilities courtesy of GitHub's "Dependabot".

## 10.1.5
_August 12, 2021_

### Core
- TimePicker updates. [PR #319](https://github.com/saddlebackdev/react-cm-ui/pull/319)
- Added `mixins` to the theme. [PR #321](https://github.com/saddlebackdev/react-cm-ui/pull/321)

### Docs
- New TimePicker doc changes. [PR #319](https://github.com/saddlebackdev/react-cm-ui/pull/319)

## 10.1.4
_July 16, 2021_

### Core
- Select changes. [PR #317](https://github.com/saddlebackdev/react-cm-ui/pull/317)
  - New `noResultText` prop.

## 10.1.3
_July 08, 2021_

### Core
- Select changes. [PR #315](https://github.com/saddlebackdev/react-cm-ui/pull/315)
  - Added a bunch of new simple Select options for our examples.
  - Removed autoScrollSelection. No need for this. it should have been doing this all along without an extra prop. It now scrolls to the selected option on open by default.
  - Fixed disabled option styling.
  - Fixed scrolling to focused option, sense our component is using its own menu scroller.
  - Added and updated option props
- Prompt changes. [PR #316](https://github.com/saddlebackdev/react-cm-ui/pull/316)
  - KeyDown Events for No and Yes buttons.
  - Focuses No button after child element click or enter key.

### Docs
- Changes to: [PR #315](https://github.com/saddlebackdev/react-cm-ui/pull/315)
  - Fixed the dropdown deprecated docs page.
  - Added more Select options for the demos.

## 10.1.2
_July 08, 2021_

### Core
- New `autoFocus` and `placeholder` props in ActionBarSearch. [PR #314](https://github.com/saddlebackdev/react-cm-ui/pull/314)
- Added `button` and `subtitle2` to and updated `subtitle1` in `./src/styles/createTypography.js`. [PR #313](https://github.com/saddlebackdev/react-cm-ui/pull/313)

## 10.0.8
_July 08, 2021_

### Core
- New `autoFocus` and `placeholder` props in ActionBarSearch. Commits 21a1155 and cf83190

## 10.0.3-hotfix-2
_July 08, 2021_

### Core
- New `autoFocus` and `placeholder` props in ActionBarSearch. Commits 5286b17 and 06c9811

## 10.1.0
_July 06, 2021_

### Core
- Fix warning messages we were getting from MUI about `ContentProps`. [PR #312](https://github.com/saddlebackdev/react-cm-ui/pull/312)

## 10.1.0
_June 25, 2021_

### Core
- New Snackbar component and `theme.palette` updates. [PR #310](https://github.com/saddlebackdev/react-cm-ui/pull/310)
- New icons added to our Icon set and fixes. [PR #303](https://github.com/saddlebackdev/react-cm-ui/pull/303)
- New tranistion Fade component. [PR #311](https://github.com/saddlebackdev/react-cm-ui/pull/311)
- Select updates and fixes. [PR #309](https://github.com/saddlebackdev/react-cm-ui/pull/309)

### Docs
- New Snackbar docs.
- Updated Icon docs.
- New Select docs

## 10.0.7
_June 25, 2021_

### Core
- Fixed a typo in ActionBar, causing a JS error.

## 10.0.6
_June 22, 2021_

### Core
- Moved Drawer's `onCloseComplete` func call to the `setState` callback.

## 10.0.3-hotfix
_June 22, 2021_

### Core
- Moved Drawer's `onCloseComplete` func call to the `setState` callback.

## 10.0.5
_June 17, 2021_

### Core
- New `data-testid`s for: [PR #304](https://github.com/saddlebackdev/react-cm-ui/pull/304), [PR #305](https://github.com/saddlebackdev/react-cm-ui/pull/305), [PR #306](https://github.com/saddlebackdev/react-cm-ui/pull/306)
  - DataCard
  - DataGrid
  - DataGroups
  - Drawer and its sub components
  - Grid and its sub components
  - PageActionBar
- To help with unit testing the Drawer's DOM query's are now defensive.

## 10.0.4
_June 14, 2021_

### Core
- Added ability to add a Custom Scrollbar to the FiltersRail. [PR #300](https://github.com/saddlebackdev/react-cm-ui/pull/300)

### Docs
- Updated Demo Page and Demo Page's Filters Rail to demonstrate custom scrollbars and also fix some functionality/state-management issues.

## 10.0.3
_June 08, 2021_

### Core
- Added new `onCloseComplete` prop to Modal.

## 10.0.2
_June 05, 2021_

### Core
- Fixed Drawer's refs in `onOpen` to be defensive.
- Added `data-testid`s to Drawer's shadow container and dimmer.

## 10.0.1
_May 21, 2021_

### Core
- Fixed Grid's width styling issue. [PR #296](https://github.com/saddlebackdev/react-cm-ui/pull/296)
- Added `dataTestId` props to: [PR #298](https://github.com/saddlebackdev/react-cm-ui/pull/298)
  - ActionBar
  - AppBar
  - DetailsWindow
  - Drawer
  - FiltersDrawer
  - FiltersRail
  - Modal
  - Page

## 10.0.0
_May 21, 2021_

### Core
- New Mobile Stepper component. [PR #290](https://github.com/saddlebackdev/react-cm-ui/pull/290) [2.0.0]
- New Modal component. [PR #290](https://github.com/saddlebackdev/react-cm-ui/pull/290) [2.0.0]
- Deprecated old Modal. Now renamed to ModalDeprecated. [PR #290](https://github.com/saddlebackdev/react-cm-ui/pull/290) [1.5.1]
- Updated Grid Component. Most old props deprecated now. [PR #275](https://github.com/saddlebackdev/react-cm-ui/pull/275) [2.0.0]

### Docs
- Renamed old Modal to ModalDeprecated.
- New Modal docs
- New Mobile Stepper docs
- New Grid docs.

## 9.20-hotfix-3 - 05/06/2021
- [PR #285](https://github.com/saddlebackdev/react-cm-ui/pull/285) / Merge Commit bc11e21
  - Fixes PersonCoreMilestones Baptism `title`.

## 9.21.4 - 05/06/2021
  - Fixes PersonCoreMilestones Baptism `title`.
- [PR #285](https://github.com/saddlebackdev/react-cm-ui/pull/285) / Merge Commit bc11e21

## 9.21.3 - 04/26/2021
- Fixed PersonCoreMilestones unit test.

## 9.21.2 - 04/26/2021
- [PR #281](https://github.com/saddlebackdev/react-cm-ui/pull/281) / Merge Commit 89ad6a2
  - PersonCoreMilestones fixes.

## 9.21.0-hotfix - 04/26/2021
- [PR #281](https://github.com/saddlebackdev/react-cm-ui/pull/281) / Merge Commit 89ad6a2
  - PersonCoreMilestones fixes.

## 9.21.1 - 04/19/2021
- [PR #278](https://github.com/saddlebackdev/react-cm-ui/pull/278) / Merge Commit e5c01e7
  - FiltersDrawerMultiSelectLabel fix

## 9.21.0 - 04/16/2021
- [PR #279](https://github.com/saddlebackdev/react-cm-ui/pull/279) / Merge Commit 5fe25c4
  - PersonCoreMilestones Performance Improvments
    - New Prop: `disablePopover`

## 9.20.4 - 04/06/2021
- [PR #277](https://github.com/saddlebackdev/react-cm-ui/pull/277) / Merge Commit 801d85a
  - New PersonPanelDetails prop: selectButtonProps.
    - Accepts `label` and `disable` as child keys.

## 9.20.3 - 02/04/2021

#### Feature
- [PR #271](https://github.com/saddlebackdev/react-cm-ui/pull/271) / Merge Commit a1a1270
  - Added `otherDataGroups` to PersonPanelDetails.

#### Bug
- [PR #271](https://github.com/saddlebackdev/react-cm-ui/pull/271) / Merge Commit a1a1270
  - Fixed some PropType warnings.
- [PR #272](https://github.com/saddlebackdev/react-cm-ui/pull/272) / Merge Commit 233d95e
  - Fixes `node-gyp` build issues.

## 9.20.2 - 02/01/2021

#### Bug
- [PR #270](https://github.com/saddlebackdev/react-cm-ui/pull/270) / Merge Commit 887e9dcb1fa03222e63c90be385e574bdb7c1bce
  - Fixed button Dropdown active state.
  - Added `colorActive` to Button.
  - Updated `theme.palatte.cyan[600]` value to match design docs.
  - Fixed ActivityIndicator's `theme` PropTypes.
  - Fixed ActionBarActionsButton's Active color state.

## 9.20.1 - 01/28/2021

#### Feature
- [PR #268](https://github.com/saddlebackdev/react-cm-ui/pull/268) / Merge Commit 47efeb9a855a6f61f26221d6205f4958613fffdc
  - Added purple to `./src/styles/createPalette.js`

#### Bug
- [PR #269](https://github.com/saddlebackdev/react-cm-ui/pull/269) / Merge Commit 0db4126cb8d0f79b789a07b74a16a7685139a737
  - Fixed Some PropType Warnings and ActionBarActionsDrawer Styling
- [PR #266](https://github.com/saddlebackdev/react-cm-ui/pull/266) / Merge Commit c2ffd51a053675bb525d60b40eb907bee2168467
  - bump gsap from 2.1.3 to 3.6.0
- [PR #267](https://github.com/saddlebackdev/react-cm-ui/pull/267) / Merge Commit 8b2b641e716d828b6b8bf04c3e709e187785df97
  - Popover Fix and Table Header Styling Fix

## 9.20.0 - 01/12/2021

#### Feature
- [PR #265](https://github.com/saddlebackdev/react-cm-ui/pull/265) / Merge Commit e6a07b579852588157949b947b6815d4bead6953
  - Refactored Popover to use MUI Popper.
  - Refactored PersonCoreMilestones to use new Popover API.
- [PR #264](https://github.com/saddlebackdev/react-cm-ui/pull/264) / Merge Commit 2949c0735df4ab31f6e6d15a4bea527c6f9e359c
  - Minor Eslint Clean Up

## 9.19.6 - 12/18/2020

#### Feature
- [PR #262](https://github.com/saddlebackdev/react-cm-ui/pull/262) / Merge Commit 0706f42ca8a9d78715c62d938fc86e8ac6f50223
  - Enhances Filters Drawer Nested Toggles and Multi Select components.

## 9.19.5 - 12/16/2020

#### Feature
- [PR #258](https://github.com/saddlebackdev/react-cm-ui/pull/258) / Merge Commit 0f909289fc25507f090efc0dfe001a071a0d5ecf
  - Use named callback functions (rather than lambda/"fat arrow" anonymous functions) for some components using `React.forwardRef()` for improved representation in React Developer Tools in the browser.
- [PR #260](https://github.com/saddlebackdev/react-cm-ui/pull/260) / Merge Commit fcbd3f118804305b4fc4ab5c3d07ca77e1d10980
  - Add "view" Icon type.
- [PR #261](https://github.com/saddlebackdev/react-cm-ui/pull/261) / Merge Commit 047b205f00a43eafb4784f77700f43f90680567a
  - DataGroups light code clean up.

#### Bug
- [PR #257](https://github.com/saddlebackdev/react-cm-ui/pull/257) / Merge Commit 09ecd18c0f14ef6ae25c903d12ed31d8fc36df38
  - Removed Grid Container In ActionsBar If `columns` is empty.
- [PR #259](https://github.com/saddlebackdev/react-cm-ui/pull/259) / Merge Commit 18da8f65b924c8f3aadcf60287f44d012c603f4a
  - Removed unwanted outline when A's are focused and enhanced Prompt's keyboard functionality (tab index and triggering on Enter key).

## 9.19.4 - 12/09/2020

#### Bug
- [PR #252](https://github.com/saddlebackdev/react-cm-ui/pull/252) / Merge Commit d835fe74d94a19f31d83fcf7cd99ba703b03151f
  - Fixed Filters Rail to push over content.

## 9.19.3 - 12/1/2020

#### Bug
- [PR #250](https://github.com/saddlebackdev/react-cm-ui/pull/250) / Merge Commit ed80399f0cc75eb22f0df309f7c07f3de8d5d1d0
  - Spread styles object for each columns on DataCard.

## 9.19.2 - 11/24/2020

#### Bug
- [PR #241](https://github.com/saddlebackdev/react-cm-ui/pull/241) / Merge Commit bb739813d679a0914c53d9abc3745e187c087181
  - Fixed Container Deprecated styling.
- [PR #246](https://github.com/saddlebackdev/react-cm-ui/pull/246) / Merge Commit e196f78e9648842960bc9e38742d39e200ac9d01
  - Minor Breadcrumbs, DropdownButtons improvements to match HC's Navigation 3.0.

## 9.19.1 - 11/05/2020

#### Feature
- [PR #236](https://github.com/saddlebackdev/react-cm-ui/pull/236) / Merge Commit e6d1af9ce14f448ca5913d440a29f94669b36c21
  - Some cosmetic change to the Deprecated Dropdown's scroll section.

## 9.18.4 - 11/05/2020

#### Feature
- [PR #236](https://github.com/saddlebackdev/react-cm-ui/pull/236) / Merge Commit e6d1af9ce14f448ca5913d440a29f94669b36c21
  - Some cosmetic change to the Deprecated Dropdown's scroll section.

## 9.19.0 - 11/03/2020

#### Feature
- [PR #228](https://github.com/saddlebackdev/react-cm-ui/pull/228) / Merge Commit 00b72e09f8c1835568b258c4aff4bfa320f71bec
  - Added `css-mediaquery`.
  - Renamed Container components to ContainerDeprecated
  - Added new Container and Content component.
  - Updated Page components to use new Container and Content components
  - Updated Drawer components to use new Container and Content components
  - Added `gutters.drawer.sm` to the theme.
  - Coverted FiltersRail's SCSS to JSS.
  - Coverted Rail's SCSS to JSS.
  - New `createMatchMedia` and `waitForComponentToPaint` methods in enzymeHelpers.js
  - Added Material-UI's Slide to our library.

#### Bug
- [PR #228](https://github.com/saddlebackdev/react-cm-ui/pull/228) / Merge Commit 00b72e09f8c1835568b258c4aff4bfa320f71bec
  - Fixed the Filters Rail to push over (shrink) Content when open.
  - Fixed the Radio Pill Group zIndex issue.
- [PR #229](https://github.com/saddlebackdev/react-cm-ui/pull/229) / Merge Commit a6434f565b4294f2b2bf9ab00a53519511f34b64
  - Fixed the warning that Material-UI was complaining about that had to do with the new Popover component.

## 9.18.3 - 10/21/2020

#### Feature
- [PR #226](https://github.com/saddlebackdev/react-cm-ui/pull/226) / Merge Commit d6192e3e3823542288358ca4bc69d362b7d213bf
  - Add `promptTextCreator` function prop to Select component so that this value can be specified and passed to underlying third-party React Select component for customization in "creatable" scenarios.

#### Bug
- [PR #224](https://github.com/saddlebackdev/react-cm-ui/pull/224) / Merge Commit 05f031b61a522260467288fdc5e850a3b0e4759a
  - Ensure that click `event` object is passed into DropdownButton's `onMenuToggle` when DropdownMenu's `onClickOutside` is triggered.
  - Also, add defensive check on `event` in DropdownButton's `onMenuToggle` before invoking `stopPropagation()` method on it.
- [PR #226](https://github.com/saddlebackdev/react-cm-ui/pull/226) / Merge Commit d6192e3e3823542288358ca4bc69d362b7d213bf
  - Fix some JSS styling bugs in Select.

## 9.18.2 - 10/17/2020

#### Bug
- [PR #225](https://github.com/saddlebackdev/react-cm-ui/pull/225) / Merge Commit 613c409c2df17b7cee1a551618117fce9d296f37
  - Fixes a bug with PersonPanel's birthdate.

## 9.18.1 - 10/12/2020

#### Bug
- [PR #223](https://github.com/saddlebackdev/react-cm-ui/pull/223) / Merge Commit c270ac2beffec3f4ad539899d7ca90ea760fb40b
  - Applies `theme.zIndex` values to DatePickerInput's calendar, Drawer, DrawerDeprecated, Modal, and Prompt.

## 9.16.4 - 10/12/2020

#### Bug
- [PR #223](https://github.com/saddlebackdev/react-cm-ui/pull/223) / Merge Commit c270ac2beffec3f4ad539899d7ca90ea760fb40b
  - Applies `theme.zIndex` values to DatePickerInput's calendar, Drawer, DrawerDeprecated, Modal, and Prompt.

## 9.18.0 - 10/08/2020

#### Feature
- [PR #218](https://github.com/saddlebackdev/react-cm-ui/pull/218) / Merge Commit 962dc32666ec4d3fcdc336e620a4e1af92d982a0
  - AppBar gap closures.

#### Bug
- [PR #219](https://github.com/saddlebackdev/react-cm-ui/pull/219) / Merge Commit 2e2dc14f0c2307034de03aa9d411eac6ac694cc5
  - Fixes disabled styling in Radio.
- [PR #221](https://github.com/saddlebackdev/react-cm-ui/pull/221) / Merge Commit 2c058e0b0f623572320b5a7c26d6f19b144240fa
  - Fixes styling issues in Select.

## 9.17.5 - 10/05/2020

#### Feature
- [PR #217](https://github.com/saddlebackdev/react-cm-ui/pull/217) / Merge Commit eb74b6f6fcf4bd8bd62145970346df69c9b51634
  - DropdownButton now stops click event propagation when clicked to expand the dropdown menu.

## 9.17.4 - 10/02/2020

#### Feature
- [PR #216](https://github.com/saddlebackdev/react-cm-ui/pull/216) / Merge Commit 3192b94644166ff9e0bf67f0d7f9fd843ecb3696
  - SubNavigation is now flat mapping through children instead of a regular ol' boring map.

## 9.17.3 - 10/01/2020

#### Bug
- [PR #215](https://github.com/saddlebackdev/react-cm-ui/pull/214) / Merge Commit 06c7a7236f9f6bbf6744e9cd17d714d95f198cbd
  - Change the word "Baptism" to "Baptized" in PersonCoreMilestones.

## 9.16.3 - 10/01/2020

#### Bug
- [PR #215](https://github.com/saddlebackdev/react-cm-ui/pull/214) / Merge Commit 06c7a7236f9f6bbf6744e9cd17d714d95f198cbd
  - Change the word "Baptism" to "Baptized" in PersonCoreMilestones.

## 9.17.2 - 10/01/2020

#### Feature
- [PR #214](https://github.com/saddlebackdev/react-cm-ui/pull/214) / Merge Commit 06c7a7236f9f6bbf6744e9cd17d714d95f198cbd
  - New component: Popover
  - Refactored part of PersonCoreMilestones to use the new Popover component.
  - Fixed bugs in PersonPanelDetails that were caused by some of the PersonCoreMilestones refactoring.

## 9.16.2 - 10/01/2020

#### Feature
- [PR #214](https://github.com/saddlebackdev/react-cm-ui/pull/214) / Merge Commit 06c7a7236f9f6bbf6744e9cd17d714d95f198cbd
  - New component: Popover
  - Refactored part of PersonCoreMilestones to use the new Popover component.
  - Fixed bugs in PersonPanelDetails that were caused by some of the PersonCoreMilestones refactoring.

## 9.15.3 - 10/01/2020

#### Feature
- [PR #214](https://github.com/saddlebackdev/react-cm-ui/pull/214) / Merge Commit 06c7a7236f9f6bbf6744e9cd17d714d95f198cbd
    - New component: Popover
    - Refactored part of PersonCoreMilestones to use the new Popover component.
    - Fixed bugs in PersonPanelDetails that were caused by some of the PersonCoreMilestones refactoring.

## 9.16.1 - 09/30/2020

#### Bug Fix
- Fixed an issue in DatePickerCalendar component and its change event handlers for previous month and next month.
  - Cherry-picked from [PR #212](https://github.com/saddlebackdev/react-cm-ui/pull/212) / Merge Commit 77896bc94f960cf1e425f42bbd8f977bfae57e91

## 9.17.1 - 09/30/2020

### Bug Fix
- [PR #212](https://github.com/saddlebackdev/react-cm-ui/pull/212) / Merge Commit 77896bc94f960cf1e425f42bbd8f977bfae57e91
  - Fixed an issue in DatePickerCalendar component and its change event handlers for previous month and next month.

## 9.17.0 - 09/28/2020

### Feature
- [PR #207](https://github.com/saddlebackdev/react-cm-ui/pull/207) / Merge Commit cb5233b6d19a73cd1892c172aaf6b375f2bc3014
  - Converted Radio SCSS to JSS
  - Fixed Radio pill group id bug
- [PR #208](https://github.com/saddlebackdev/react-cm-ui/pull/208) / Merge Commit f2e4cc19a390f40ebe9ebc8a3dd6d30453c13e3b
  - New Select component.
- [PR #210](https://github.com/saddlebackdev/react-cm-ui/pull/210) / Merge Commit a5f9e0972d5b4552c34f033a1998b392ad99deb0
  - Fix ESLINT issues in Radio Button components
- [PR #209](https://github.com/saddlebackdev/react-cm-ui/pull/209) / Merge Commit 03dd9e479802c681d82dedd9962421b8eae759eb
  - Enhanced Dropdown select options by adding `is-disabled`, `is-focused`, `is-selected` classes and added auto scrolling to the item.

### Bug Fix
- [PR #211](https://github.com/saddlebackdev/react-cm-ui/pull/211) / Merge Commit d84f550e026b0555a557d3280efcf2e7c8c7dec8
  - Fixed PersonPanel child/student records displaying incorrect age.

## 9.16.0 - 09/16/2020

#### Feature
- [PR #192](https://github.com/saddlebackdev/react-cm-ui/pull/192) / Merge Commit 8544d9b3119124f346b10a0d122b34cfb388f484
  - DataGrid
    - New `classes` prop.
    - `moduleType` prop no longer required.
    - Converted SCSS to JSS
    - `className` is now in our new global constants file.
  - Updated PersonContactInfo, PersonCoreMilestones, PersonPanel with new Enzyme helper
  - Added height.actionBar heights to the theme.
  - Added spacing to the theme.
- [PR #194](https://github.com/saddlebackdev/react-cm-ui/pull/194) / Merge Commit 538b8f2defdac395b734ef4934d88fbb31e4a330
  - Refactored DurationPicker.
  - Updated versions with durationPicker versions.
- [PR #203](https://github.com/saddlebackdev/react-cm-ui/pull/203) / Merge Commit 1eefc85592f4834d7a848e57d845c863b2257921
  - Added `onKeyDown` prop and method to Button, DropdownButton, and Icon.
  - Added `tabIndex` prop to DropdownButton and Icon.
  - Added outline style to Button, DropdownButton, and Icon
- [PR #195](https://github.com/saddlebackdev/react-cm-ui/pull/195) / Merge Commit 6a05e68ad5ba728e2746d82bb61d71fd3b54d2af
  - New dependencies: `react-resize-detector` and `jest-react-hooks-shallow`.
  - Added a theme to DropdownButton and DropdownMenu components.
  - Converted DropdownMenu SCSS to JSS.
  - New components: Breadcrumbs and SectionalTabs
  - Updated versions with breadcrumbs and sectionalTabs versions.

#### Bug Fix
- [PR #201](https://github.com/saddlebackdev/react-cm-ui/pull/201) / Merge Commit 053c3500a7e787794defc2ed253b144721302246
  - build(deps-dev): bump node-sass from 4.12.0 to 4.13.1
- [PR #206](https://github.com/saddlebackdev/react-cm-ui/pull/206) / Merge Commit 79333088266dbfb3b951fde6e551787e569a2591
  - Fixed outline styling for when click on a Button, DropdownButton or Icon.

## 9.15.2 - 08/27/2020

#### Bug Fix
- [PR #197](https://github.com/saddlebackdev/react-cm-ui/pull/197) / Merge Commit 0bac4d4923b52b014f3bd5ac401d22ecb592b310
    - Fixed a small JSS style bug affecting **PageContent** component.

## 9.15.1 - 08/26/2020

#### Bug Fix
- [PR #193](https://github.com/saddlebackdev/react-cm-ui/pull/193) / Merge Commit 000718b6ac81829fd4897815d12aefd431ee1bd7
    - Added some defensive checks on **PhoneInput's** dropdown values.
    - Removed the "international" option from **PhoneInput** dropdown options.

## 9.15.0 - 08/21/2020

#### Feature
- [PR #186](https://github.com/saddlebackdev/react-cm-ui/pull/186) / Merge Commit 16d06373f870432f09ec9b6c96224e8b88e5e908
    - Reorganized Components In `./src`
- [PR #189](https://github.com/saddlebackdev/react-cm-ui/pull/189) / Merge Commit 43bf9894dd4b830551662ed8a67c264e12716781
    - Change to allow disabling international region code for phone numbers.
- [PR #190](https://github.com/saddlebackdev/react-cm-ui/pull/190) / Merge Commit f2142f54cb4f2cd41698d4d608367bc5d33e92d5
    - Added `customFormat` prop to **DatePickerInput**

## 9.13.6 - 08/12/2020

- Fix Radio Button `onClick` handling when `multi` prop is set to `true` (Commit 72fdd9206ba26b685a0b4fd4c640aa16e37fffaf)
    - Cherry-picked from [PR 184](https://github.com/saddlebackdev/react-cm-ui/pull/184) / Merge Commit 51781117d934a019133cbb81d2ee22289da379e6

## 9.14.1 - 08/06/2020

#### Bug Fix
- [PR #184](https://github.com/saddlebackdev/react-cm-ui/pull/184) / Merge Commit 51781117d934a019133cbb81d2ee22289da379e6
    - Fixes handling a click on radio item with multi option.
- [PR #185](https://github.com/saddlebackdev/react-cm-ui/pull/185) / Merge Commit f5f3eb9414c60b691ccc00166f052edef84d3ba7
    - **Page Details Window** gutter fix.

## 9.13.5 - 08/05/2020

### Bug Fix
- Fix Page Details Window Gutter (commit 3a0ccd7a93d93ffee21a1b7b8c2246a7890e3bff)
    - Cherry-picked from [PR 185](https://github.com/saddlebackdev/react-cm-ui/pull/185) / Merge Commit f5f3eb9414c60b691ccc00166f052edef84d3ba7

## 9.14.0 - 07/31/2020

#### Feature
- [PR #180](https://github.com/saddlebackdev/react-cm-ui/pull/180) / Merge Commit 5d51bbe0a255470fddfeb78209af3df54c234c11
    - Added react-sortablejs to handle D&Ding **DataGridTableRows**
- [PR #181](https://github.com/saddlebackdev/react-cm-ui/pull/181) / Merge Commit 2621c598c6703dbe4fe2136fd9e644d20ef8b672
    - Updated **Modal** styling to match design.
    - Added `warning` color to **Prompt's** `inlineMessageColor`.

#### Bug Fix
- [PR #181](https://github.com/saddlebackdev/react-cm-ui/pull/181) / Merge Commit 2621c598c6703dbe4fe2136fd9e644d20ef8b672
    - Fixed bug in **TextArea**.

## 9.13.4 - 07/16/2020

#### Bug Fix
- [PR #176](https://github.com/saddlebackdev/react-cm-ui/pull/176) / Merge Commit d899aef82d3a1694facc04b2de92ef29f1c7357d
    - bump lodash from 4.17.15 to 4.17.19
- [PR #177](https://github.com/saddlebackdev/react-cm-ui/pull/177) / Merge Commit 5a81b0e723d4035b703bb0ff639b07ee2a03f6f2
    - Added `withWidth` HOC.
- [PR #179](https://github.com/saddlebackdev/react-cm-ui/pull/179) / Merge Commit f80cd59eadab30e53a98a007d7a72b6d045afa87
    - Fixed **Table** sticky bug.

## 9.13.3 - 07/10/2020

#### Bug Fix
- [PR #175](https://github.com/saddlebackdev/react-cm-ui/pull/175) / Merge Commit 16b712761bd911386bfb1a04b61a02f96c11828d
    - Person Panel
        - Reordered hooks to have all components read the same.
        - Passes in props to the makeStyles hook so we can override the root class in parent components.
        - Added className prop.
        - Added an expect in the root classes test to make sure it's rendering the override class.
        - Added a test to for className
    - Person Panel Summary
        - Reordered hooks to have all components read the same.
        - Code clean up
        - Added className prop.
        - Added id prop.
        - Added an expect in the root classes test to make sure it's rendering the override class.
        - Added a test to for className
        - Added a test to for id
    - Person Panel Details
        - Reordered hooks to have all components read the same.
        - Added className prop.
        - Code clean up

## 9.13.2 - 07/08/2020

#### Bug Fix
- [PR #160](https://github.com/saddlebackdev/react-cm-ui/pull/160) / Merge Commit b719dd0d72f05c9f6a99e81c5b1576421beb3e2d
    - Eslint Auto Fixes.
- [PR #173](https://github.com/saddlebackdev/react-cm-ui/pull/173) / Merge Commit 66ff8c3adb9f6049e1286278c54737c07ea898c7
    - Fixes some **PersonPanel** bugs.
    - Moved **PersonPanel** files to `./src/dataDisplay/personPanel`
    - **PersonPanel** component unit tests.
    - Fixed our babel config that was including tests in `./core`.

## 9.13.1 - 07/02/2020

#### Feature
- [PR #174](https://github.com/saddlebackdev/react-cm-ui/pull/174) / Merge Commit ee4630fd1debc82452102239e799d192e8532ff3
    - Fixed **Checkbox** bug.

## 9.13.0 - 06/26/2020

#### Feature
- [PR #147](https://github.com/saddlebackdev/react-cm-ui/pull/147) / Merge Commit 03ee127a7823367e0f7e26e652b941549a62d9fe
    - New **PersonPanel** components.
- [PR #159](https://github.com/saddlebackdev/react-cm-ui/pull/159) / Merge Commit 5d3de5da2e6fdcbfdf0e4a78e7136d6a236b4cb5
    - Refactored **Table** sticky column(s).
- [PR #170](https://github.com/saddlebackdev/react-cm-ui/pull/170) / Merge Commit f78366dc674fb21672dc1628893166b6fe39e8cc
    - Cleaned up **Icon** and added ability to suppress `title`.

#### Bug Fix
- [PR #161](https://github.com/saddlebackdev/react-cm-ui/pull/161) / Merge Commit 983f432c5928667f6e1f9981ef6da58a13e3eb95
    - Fixed **DropdownButton's** menu being cut off in Chrome.
- [PR #163](https://github.com/saddlebackdev/react-cm-ui/pull/163) / Merge Commit a10ead45ace696c891d8d49ecd50d42c8cbef637
    - Deprecrated `disabled` prop and added `disable` prop.
- [PR #165](https://github.com/saddlebackdev/react-cm-ui/pull/165) / Merge Commit e4117c4210b8e13ac72cc86df4eb89987b2c99f2
    - Fixed design issues, when using actionbarButtons in **Drawer** for smaller viewports (Mobile).
    - Refactor widths of **Drawer.TitleBar** & **Drawer.ActionBar** based on new designs.
- [PR #167](https://github.com/saddlebackdev/react-cm-ui/pull/167) / Merge Commit 142192cb1933799e75583c4805b7528e2e39972d
    - Fixed action bar button drawer overlapping issue on **Drawer** when **Drawer**. Navigation is included for **Drawer**.
- [PR #168](https://github.com/saddlebackdev/react-cm-ui/pull/168) / Merge Commit 569a4c6ca83605e2e90720127bd7a9f27efa5e90
    - Fixed search text box overlapping content in our the `sm` breakpoint.
- [PR #169](https://github.com/saddlebackdev/react-cm-ui/pull/169) / Merge Commit fa4006846b357905e0596a9bb5f4c0879a7323d1
    - Fixed **Page** gutters in order to close gap between design and dev.

## 9.12.1 - 06/12/2020

#### Bug Fix
- [PR #156](https://github.com/saddlebackdev/react-cm-ui/pull/156) / Merge Commit f220b42d63b9da455540975b6ec187ebe35488c4
    - **Drawer** and **DrawerDeprecated** `zIndex` fixes.
    - Added `isModal` prop to **Drawer**.
- [PR #157](https://github.com/saddlebackdev/react-cm-ui/pull/157) / Merge Commit 6d97221cc5496312b25491042bb164e8d98c2d38
    - Fixed **DataGrid** column cell alignments.

## 9.11.2 - 06/12/2020

#### Bug Fix
- **Drawer** and **DrawerDeprecated** `zIndex` fixes.
- Added `isModal` prop to **Drawer**.

## 9.12.0 - 06/09/2020

#### Feature
- [PR #154](https://github.com/saddlebackdev/react-cm-ui/pull/154) / Merge Commit 800011d9afd045cfaf822878511292bfeaf7cee0
    - Added DataGrid Props To Support Styling.

## 9.11.1 - 06/04/2020

#### Bug Fix
- Fixed compile script to include `./src/colors` and `./src/dataDisplay/icons` directories.

## 9.11.0 - 06/03/2020

#### Feature
- [PR #140](https://github.com/saddlebackdev/react-cm-ui/pull/140) / Merge Commit 58e8467ba295b016156fbe9ca610fd8ec3b7f61d
    - Added useTheme To Styles.
- [PR #145](https://github.com/saddlebackdev/react-cm-ui/pull/145) / Merge Commit a5f332c578223e35d4be15c15d9c62cee71f6c1f
    - Modify action button drawer component to take custom classes.
- [PR #146](https://github.com/saddlebackdev/react-cm-ui/pull/146) / Merge Commit a5f332c578223e35d4be15c15d9c62cee71f6c1f
    - Add `id` prop to `<A>` component
- [PR #148](https://github.com/saddlebackdev/react-cm-ui/pull/148) / Merge Commit eac1e10377b879a1d6252d9b2be29a18cc906581
    - Banner and Z-Index Changes.
- [PR #150](https://github.com/saddlebackdev/react-cm-ui/pull/150) / Merge Commit 8bd599326be714d493bea953a0c6603732176a8d
    - Added and Fixed Data Type - Person Icons.
- [PR #151](https://github.com/saddlebackdev/react-cm-ui/pull/151) / Merge Commit 78dab928501e185437f2bc9a0549a21778467489
    - Added Palette, Shape, Transitions, and Typography to the theme.
- [PR #152](https://github.com/saddlebackdev/react-cm-ui/pull/152) / Merge Commit 7b32e20b9d83bc79d52b586d4af856cb65274467
    - Added new Typography component.

#### Other
- [PR #142](https://github.com/saddlebackdev/react-cm-ui/pull/142) / Merge Commit 90ca4c9a432367e77a250d62733e6f3a1605649a
    - Implemented Jest Framework.
- [PR #143](https://github.com/saddlebackdev/react-cm-ui/pull/143) / Merge Commit 607529e9d4e33ead1bb9670d02ed6ce24bbb6124
    - Add explicit import of things from `@jest/globals` package

## 9.10.1 - 05/11/2020

#### Bug Fix
- [PR #138](https://github.com/saddlebackdev/react-cm-ui/pull/138) / Merge Commit 0d42cc33ef08afc1416336eff809017b019432b2
    - Fixed pacakge build error.

## 9.10.0 - 05/07/2020

#### Feature
- [PR #136](https://github.com/saddlebackdev/react-cm-ui/pull/136) / Merge Commit f468d5032bd818fdb105d9ceeeeecc7fafb36ef8
    - Drawer Content gutters were widened.
- [PR #137](https://github.com/saddlebackdev/react-cm-ui/pull/137) / Merge Commit 923b3fb7d630627bb34d668cfd9e2f7acc8694ff
    - **Page/Drawer** **ActionBar** actionsButton has the ability to change icon now.

#### Bug Fix
- [PR #138](https://github.com/saddlebackdev/react-cm-ui/pull/138) / Merge Commit 980e4589d6db19d738d5ac1b1f624316b618110b
    - Gulp inputs script fix.

## 9.9.0 - 04/27/2020

#### Feature
- [PR #134](https://github.com/saddlebackdev/react-cm-ui/pull/134) / Merge Commit bc7a86698b0f78cc25420869047299b5963fecac
    - Prompt passes the "yes" and "no" click events through.
- [PR #135](https://github.com/saddlebackdev/react-cm-ui/pull/135) / Merge Commit 7772a61edd8ede424420774bb64dbbba5e7eb4b8
    - Moved input type components to a new dir/category, "Inputs".
    - Changed all `PropTypes.object` to `PropTypes.shape({})`.

#### Bug Fix
- [PR #132](https://github.com/saddlebackdev/react-cm-ui/pull/132) / Merge Commit 01214de064ffdd4130d663bda9c97482d0212c90
    - Moved Cell phone icon to center.
- [PR #133](https://github.com/saddlebackdev/react-cm-ui/pull/133) / Merge Commit 1b9a831989481e65d04573b5b490d15973ce6e8d
    - Validating drawer header exists before trying to modify its padding size.

## 9.8.0 - 04/14/2020

#### Feature
- [PR #131](https://github.com/saddlebackdev/react-cm-ui/pull/131) / Merge Commit 354883a1051d993bb894fb3822acf5b8e9dc488a
    - Reorganization of components.
    - Implemented some of Material-UI's styles.
        - We now can do JSS using `makeStyles` or `withStyles`.
        - We now have the starting to a global theme, starting with breakpoints.
    - New `versions.js`. This is part of the UI gap closure.

## 9.7.1 - 04/09/2020

#### Bug Fix
- [PR #129](https://github.com/saddlebackdev/react-cm-ui/pull/129) / Merge Commit c28481c5996728da074168de20cb639dd3b7603d
    - **Drawer** animation performance fixes.
- [PR #130](https://github.com/saddlebackdev/react-cm-ui/pull/130) / Merge Commit 67b937e14aef945661c74cae52c4b93ddbe0216c
    - **Input** required prop fixes.

## 9.7.0 - 03/18/2020

#### Feature
- [PR #128](https://github.com/saddlebackdev/react-cm-ui/pull/128) / Merge Commit a9609215224a5da0baeaf9304ecd36737a222a98
    - **Page**: Implemented forwardRef.

## 9.6.2 - 03/12/2020

#### Bug Fix
- [PR #124](https://github.com/saddlebackdev/react-cm-ui/pull/124) / Merge Commit 8d9be9cbb345231569d17fdb82609d68d8822a99
    - Fixed color import.
- [PR #125](https://github.com/saddlebackdev/react-cm-ui/pull/125) / Merge Commit 7ea8d16ffc190b126ca4d265ec4ea355bbcf3411
    - **DetailsWindow**: Implemented forwardRef.

## 9.6.1 - 03/12/2020

- [PR #123](https://github.com/saddlebackdev/react-cm-ui/pull/123) / Merge Commit 16f9955044e5becb70cea358f1b938c4b5a0a807
    - Fixes **DrawerDeprecated** Regression

## 9.6.0 - 03/12/2020

#### Feature
- [PR #120](https://github.com/saddlebackdev/react-cm-ui/pull/120) / Merge Commit 473f44ffcbdfed6d107d2babc70f5bdcc4e6dd49
    - Added ability to change the **FiltersRail** and **FiltersDrawer** component's breakpooints.

#### Bug Fix
- [PR #121](https://github.com/saddlebackdev/react-cm-ui/pull/121) / Merge Commit 5b519df7acb55832fd1aaaa249f145143b55661a
    - Fixes the body scroll issue when opening a **Drawer**.
- [PR #122](https://github.com/saddlebackdev/react-cm-ui/pull/122) / Merge Commit 8c9710987d7d64eddb1dbc70f29e6dec37ac55e0
    - Fixes style not being spread into the **Drawer** component's container style prop.

## 9.5.0 - 03/10/2020

#### Feature
- [PR #115](https://github.com/saddlebackdev/react-cm-ui/pull/115) / Merge Commit 04ce4cef66cc6c701878adb22f13f11614b1e3a1
    - New **TimeFromNow** utility component.
- [PR #116](https://github.com/saddlebackdev/react-cm-ui/pull/116) / Merge Commit dc94ccfdbfe97e5a2bcbebdb1b1eecff88afb4ea
    - Added the ability to update the **Drawer** component's `maxWidth`.

#### Bug Fix
- [PR #117](https://github.com/saddlebackdev/react-cm-ui/pull/117) / Merge Commit 6eb654dfaa138ef1bf57b82e90445d4afb700c3e
    - Fixes the `outline` issue with some of our buttons in iOS.
- [PR #118](https://github.com/saddlebackdev/react-cm-ui/pull/118) / Merge Commit ab5453bfc1f8788e327b3703ae8330ef0a9391db
    - Fixes the `-webkit-appearance` issue with our **Input** and **TextArea** components in iOS.
- [PR #119](https://github.com/saddlebackdev/react-cm-ui/pull/119) / Merge Commit 4e4d33e5fea81af326ee3d48eaec0ac88c14d089
    - Fixes some issues with our **Drawer** component's **ActionBar** `border-top`.

## 9.4.0 - 03/05/2020

- [PR #114](https://github.com/saddlebackdev/react-cm-ui/pull/114) / Merge Commit 27e4d90edba46584765b45dc651afc174ab4f959
    - Icons:
        - New icons.
        - Renamed some current icons (old names are aliases now) to close design/dev gap.
    - Refactored `timeFromNow` util function.

## 9.3.1 - 02/19/2020

- [PR #112](https://github.com/saddlebackdev/react-cm-ui/pull/112) / Merge Commit 619db3f1349b567f8e690d09678e0d2b65d40a05
    - Fixes the crash on **DataGridTableRow** render.
- [PR #113](https://github.com/saddlebackdev/react-cm-ui/pull/113) / Merge Commit 2b327385e4ff0176730a44b870f35246b677e637
    - Fixes **Dropdown** being a child of **Prompt**.

## 9.3.0 - 02/18/2020

- [PR #104](https://github.com/saddlebackdev/react-cm-ui/pull/109) / Merge Commit f5a6aee8865df85ef603ec3c16dbec7a86727113
    - Reworked file structure. All of our components have been organized into their respective atomic directories: Atoms, Molecules, Organisms, and Templates.
- [PR #110](https://github.com/saddlebackdev/react-cm-ui/pull/110) / Merge Commit b5e0741ea0f00cf3dbe001b173ae969941357dfb
    - Added new **DropdownButton** component.
    - Deprecated the **Dropdown** `button` prop.
    - Added new **A** component.
- [PR #111](https://github.com/saddlebackdev/react-cm-ui/pull/111) / Merge Commit d971ac189a3b2120c271fbd0a039ec4977c143ed
    - Added basic props to the **DataGrid** `rowProps` prop.

## 9.2.0 - 01/30/2020

- [PR #109](https://github.com/saddlebackdev/react-cm-ui/pull/109) / Merge Commit f5a6aee8865df85ef603ec3c16dbec7a86727113
    - New `backgroundColor` prop in our **Page** component. Accepts the values `white` or `grey`.
    - The **Page** gutter has been fixed according to Design Guidelines.

## 9.1.0 - 01/27/2020

- [PR #108](https://github.com/saddlebackdev/react-cm-ui/pull/108) / Merge Commit cd51d26f14b41391289f120a3f824808480c0cfd
    - **Checkbox**
        - Cleaned up Eslint issues.
        - Fixed disable styling for when checked or not.
    - **DatePickerInput**
        - Added a new `fluid` prop.
    - **Grid**
        - Component uses `React.forwardRef`.
        - Added a new `form` prop.
    - **Grid.Column**
        - Component uses `React.forwardRef`.
        - Added a new `fieldType` prop. Accepts one of the following: `checkbox`, `legend`, `radio`.
        - Fixed `children` propType warning.
    - **Grid.Row**
        - Component uses `React.forwardRef`.
    - **PhoneInput**
        - Fixed disabled value label color.
        - Fixed disabled country dropdown.
        - Fixed `fluid` styling.
    - **Radio**
        - Fixed disabled label color.
- [PR #107](https://github.com/saddlebackdev/react-cm-ui/pull/107) / Merge Commit 365f81e1953b55f7cdc8bb861ce3861fde69a2a2
    - No PBI Fixes resizing sticked columns.

## 9.0.1 - 01/10/2020

- [PR #106](https://github.com/saddlebackdev/react-cm-ui/pull/106) / Merge Commit 67f158e
    - **Header's** `defaultProp` `color` was changed to `text` accidently while fixing some Eslint issues. The default value should be `undefined`.

## 8.0.4 - 01/10/2020

#### Bug Fix
- [PR #106](https://github.com/saddlebackdev/react-cm-ui/pull/106)
    - **Header's** `defaultProp` `color` was changed to `text` accidently while fixing some Eslint issues. The default value should be `undefined`.

## 9.0.0 - 01/08/2020

#### Feature
- Commit 59b9716
    - Added `className` and `id` to **HeaderSubHeader**.
- Commit eca4611
    - Added `form` to the **Grid's** propTypes. This will give a **Grid** the vertical negative space it needs between each **Grid.Column** housing a form field.
- Commit 0daf4e9
    - Renamed the dateUtils "format" functions for better use.

#### Bug Fix
- Commit 0daf4e9
    - Fixes the list in **ActionBar** from being centered.

#### Bug Fix
- PR #99
    - Fixed typo 'Decemeber' in month picker.

## 8.0.3 - 01/08/2020

#### Bug Fix
- PR #99
    - Fixed typo 'Decemeber' in month picker.

## 8.0.2 - 01/08/2020

#### Bug Fix
- [PR #100](https://github.com/saddlebackdev/react-cm-ui/pull/100)
    - Fixes problem with **DetailsWindow** column' styling.
    - Version 8.0.1 was supposed to include this PR, but somehow I missed the one change that was supposed to go into it. Doh!

## 8.0.1 - 01/08/2020

#### Bug Fix
- [PR #100](https://github.com/saddlebackdev/react-cm-ui/pull/100)
    - Fixes problem with **DetailsWindow** column' styling.

## 8.0.0 - 01/06/2020

#### Feature
- BREAKING: [PR #93](https://github.com/saddlebackdev/react-cm-ui/pull/93)
    - New ./src/ File Structure Beginnings
        - Moved all template files to ./src/templates.
        - ./src/templates JS/JSX files are Eslint free.
        - Moved ./docs/ package.json dependencies and devDependencies to ./docs/ new package.json
        - Moved webpack.config to ./docs/
        - implemented .bablerc settings into new babel.config.js file.
        - Deleted .babelrc
    - FiltersDrawer:
        - Copied old pageFiltersDrawer.js and created filtersDrawer.jsx. Also split its components out into individual files.
        - Copied old pageFiltersDrawer.scss and created filtersDrawer.scss
        - Renamed old pageFiltersDrawer.js -> pageDeprectatedFiltersDrawer.jsx
        - Renamed old pageFiltersDrawer.scss -> pageDeprecatedFiltersDrawer.scss
        - The components pageFiltersDrawer.jsx and drawerFiltersDrawer.jsx wrap <FiltersDrawer /> now.
        - Added checkbox and toggle to
        - Copied/Renamed ./docs/modules/drawerFiltersDrawer.js -> ./docs/tempaltes/drawerFiltersDrawer.jsx.
        - Created a new Drawer Deprecated Filters Drawer doc page, ./docs/modules/drawerDeprecatedFiltersDrawer.js
    - Container
        - Copied pageContainer.js and created container.jsx
        - Changed pageContainer.js -> pageContainer.jsx and wrapped container.jsx
        - Created a new drawer.Container.jsx
    - Content
        - Created content.jsx
        - Changed pageContent.js -> pageContent.jsx and wrapped content.jsx
        - Changed drawerContent.js -> drawerContent.jsx and wrapped content.jsx
        - Copied drawerContent.scss and implemented into content.scss
        - Copied pageContent.scss and implemented into content.scss
        - Created a new drawer.Container.jsx
- [PR #95](https://github.com/saddlebackdev/react-cm-ui/pull/95)
    - Table Row Reordering with Drag and Drop.

#### Bug Fix
- [PR #92](https://github.com/saddlebackdev/react-cm-ui/pull/92)
    - Update the "avatar" image embedded in **Comment**. We missed this when we refactored **Image** to use type prop rather than avatar prop.
    - Adds some npm commands to be able to run in production mode.
- [PR #94](https://github.com/saddlebackdev/react-cm-ui/pull/94)
    - PR #94 fix the **DatePickerInput** year dropdown positioning.
- [PR #96](https://github.com/saddlebackdev/react-cm-ui/pull/96)
    - Fixes a case sensitive issue with one of our SCSS imports.
- [PR #97](https://github.com/saddlebackdev/react-cm-ui/pull/97)
    - Adds the ability to specify an own ID for DataGrid. Each cell of the DataGrid now has its own ID.
- [PR #98](https://github.com/saddlebackdev/react-cm-ui/pull/98)
    - Fixes getting DataGrid row height on column resize.

## 7.2.3

#### Bug Fix
- [PR #94](https://github.com/saddlebackdev/react-cm-ui/pull/94)
    - PR #94 fix the **DatePickerInput** year dropdown positioning.

## 7.2.2

#### Bug Fix
- [PR #91](https://github.com/saddlebackdev/react-cm-ui/pull/91)
- [PR #90](https://github.com/saddlebackdev/react-cm-ui/pull/90)
    - PR #90 and #91 fix the **DataGrid** `id` bug.

## 7.2.1

#### Bug Fix
- Removed `.jsx` extensions.

## 7.2.0

### Feature
- [PR #82](https://github.com/saddlebackdev/react-cm-ui/pull/82)
    - Added a expand feature to **DataGroups**.
- [PR #86](https://github.com/saddlebackdev/react-cm-ui/pull/86)
    - Documentation additions.
- [PR #87](https://github.com/saddlebackdev/react-cm-ui/pull/87)
    - Prevents click when highlighting elements for **Card** and **TableRow**.
- [PR #88](https://github.com/saddlebackdev/react-cm-ui/pull/88)
    - Added icons: `marital-status` and `preferred-service`.

#### Bug Fix
- [PR #85](https://github.com/saddlebackdev/react-cm-ui/pull/85)
    - Fixed `accessedData` function.
- [PR #89](https://github.com/saddlebackdev/react-cm-ui/pull/89)
    - Fixes the DataGroups column style bug.

## 7.1.0

### Feature
- [PR #83](https://github.com/saddlebackdev/react-cm-ui/pull/83)
    - New `child` and `home` icons.
- [PR #84](https://github.com/saddlebackdev/react-cm-ui/pull/84)
    - New **Icon** color, `disable`.

#### Bug Fix
- [PR #81](https://github.com/saddlebackdev/react-cm-ui/pull/81)
    - Fixes a **DataGroups** style bug in Chrome.

## 7.0.0

### Feature
- BREAKING: [PR #80](https://github.com/saddlebackdev/react-cm-ui/pull/80)
    - Renanmed Page/Drawer **Details** sub component to **DetailsWindow**
        - Moved the sub component into one file. **Page/Drawer** component uses the same sub component file now.
        - Class names have changed as well.
    - Renanmed Page/Drawer **Grid** sub component to **DataCards**
        - Class names have changed as well.
    - Renanmed Page/Drawer **Table** sub component to **DataGrid**
        - Class names have changed as well.
    - New Page/Drawer **DataGroup** sub component!
- BREAKING: [PR #78](https://github.com/saddlebackdev/react-cm-ui/pull/78)
    - Changed **DOMUtils** case type to **domUtils** and how we export the file. We will need to
    update this in HC.
    - Changed **DateUtils** case type to **dateUtils**.
- [PR #76](https://github.com/saddlebackdev/react-cm-ui/pull/76)
    - Added `timeFromNow` function to `dateUtils`.
- Added `formatShortWithSpecifiedTz` function to `dateUtils`.

#### Bug Fix
- [PR #78](https://github.com/saddlebackdev/react-cm-ui/pull/78)
    - There was a 'position: fixed' iOS bug that caused our **Drawer's** **TitleBar**,
    **Navigation**, and **ActionBar** sub components to disappears when scrolling down. The fix
    works on iOS 11 and 13. However, for iOS 12 it does not work.

## 6.4.6

#### Bug Fix
- Updated **ActionBar's** search clear icon to match design's UI library.
- Removed **ActionBar's** magnification icon when in mobile view.

## 6.4.5

#### Bug Fix
- Changed the way we import our css exported color variables into JS for some Jest research.

## 6.4.4

#### Bug Fix
- Changed the way we import our css exported color variables into JS for some Jest research.

## 6.4.3

#### Bug Fix
- [PR #73](https://github.com/saddlebackdev/react-cm-ui/pull/73)
    - Fix up a few functions in **DateUtils** that were ported over from Healthy
    Church.  In particular, fix it so we do not introduce the "UNIX Epoch Bug",
    where a functions expecting a numeric timestamp would incorrectly return `null`
    upon encountering a value of zero, as opposed to 1 January 1970 as they should.
    This bug was patched in HC's corresponding **DateUtils** functions a while
    back, but was inadvertantly reintroduced to the React CM UI versions.

## 6.4.2

#### Bug Fix
- [PR #72](https://github.com/saddlebackdev/react-cm-ui/pull/72)
    - Fix possible dereference of `undefined` during **Page.TableRow** render.
    The logic trying to fetch the size of the cell was failing to take into
    that the size data for that cell might not be available yet.  This was
    happening in the Healthy Church client app when using the **PageTable** in
    combination with our "load more" / "infinite scroll" component.  So we added
    an additional safety check to prevent the error.

## 6.4.1

#### Bug Fix
- [PR #71](https://github.com/saddlebackdev/react-cm-ui/pull/71)
    - Fixed regression in certain nested **Drawer** scenarios caused by a default
    value of "top" for the new `positionY` prop. `positionY` prop should only be
    set to "top" or "bottom" if the new sticky drawer behavior is desired.
    It must default to not being set at all. Having it default to "top" was
    preventing the "nested toggles" in the page mobile filters drawer from being
    visible, due to `overflow: hidden;` in the CSS for the sticky drawer.

## 6.4.0

### Feature
- [PR #59](https://github.com/saddlebackdev/react-cm-ui/pull/59)
    - Added ability to make **Drawer** component sticky and set `max-height` for those sticky drawers
- [PR #63](https://github.com/saddlebackdev/react-cm-ui/pull/63)
    - Improvements for **Page.ActionBar**
        - Added the ability to disable an action bar button
        - Better view for icon buttons
- [PR #64](https://github.com/saddlebackdev/react-cm-ui/pull/64)
    - Fixes margins for **Page.Table** on desktop/mobile modes
- [PR #65](https://github.com/saddlebackdev/react-cm-ui/pull/65)
    - Build Prompt functionality into **&lt;Page.ActionsBar /&gt;** (specifically
    the **&lt;ActionBarActionsButton /&gt;** for the mobile actions menu) so that
    various options or sub-options can request and configure a confirmation
    **Prompt** before their `onClick` action is actually fired.
- [PR #66](https://github.com/saddlebackdev/react-cm-ui/pull/66)
    - Additional updates to **Page.Details**
- [PR #67](https://github.com/saddlebackdev/react-cm-ui/pull/67)
    - Added Contract Icon
- [PR #70](https://github.com/saddlebackdev/react-cm-ui/pull/70)
    - **Page.Details** Expandable Columns
    - Improve mobile expand/contract behavior, add CSS animation, and generally
    fix up the **Page.Details** component so it's ready for prime-time.

## 6.3.1

#### Bug Fix
- [PR #62](https://github.com/saddlebackdev/react-cm-ui/pull/62): Bug Fixes in **Page.ActionBar** and various sub-components:
    - Add a missing piece to wire up new **ActionBar** search `onClearClick` event handler
    - Fix a couple of issues with the **ActionBar** mobile drawer options and sub-options, having to do with clickability and disabled state.
    - Fix up some ESLINT issues highlighted using Airbnb's ESLINT config rules in the Demo Page and a few components.  Demo Page now organized
    as Airbnb Style guide recommends for React components.

## 6.3.0

#### Feature
- [PR #58](https://github.com/saddlebackdev/react-cm-ui/pull/58): Adds some new sticky column(s) functionality to **Page.Table**.
    - New props: `handle`, `stickyColumnWidth`, and `stickyColumns`.
- New `droplet` icon added to the **Icon** component.
- New `expand` (alias: `contract`) icon added to the **Icon** component.
- New **ActionBar** search `onClearClick` event handler.
- We're now using Airbnb's eslint config rules!

#### Bug Fix
- Fixed our exported `dateUtils` class to not throw errors when using certain utility functions it has to offer.
- Added `dateUtils` functions not in react-cm-ui's class from HC's `dateUtils` file to sync up. HC is now supposed to be using react-cm-ui's `dateUtils` functions instead of the now deprecated HC `dateUtils` functions.
- **Button** only has one height now. No more `44px` for desktop.

#### Doc
- Split up the `./docs/src/elements/icon.js` file into two, `./docs/src/elements/iconSet.js` and `./docs/src/elements/iconExamples.js` and added routes to those specific pages. We can now link directly to the exact location.
- Added a sort dropdown to our `./docs/src/elements/iconSet.js`. We can now sort our icons by "category" or "alphabetically (asc)."

## 6.1.4

#### Feature
- Added a new prop, `selectedColumnIndex` to **Drawer.Navigation** to fix a state issue.

#### Bug Fix
- Fixed a **Drawer** style bug that was overwriting DrawerDeprecated's styles.

## 6.2.3

#### Feature
- Same added feature for **Drawer.Navigation** as in `6.1.4`.

## 6.1.3

- Don't ask.

## 6.2.2

#### Bug Fix
- Same bug fix for SCSS background colors as in `6.1.2`.

## 6.1.2

#### Bug Fix
- Fix an issue where some of the SCSS background colors were incorrectly set
(not using the correct color name).

## 6.2.1

#### Bug Fix
- Same bug fix in **&lt;DatePickerInput /&gt;** as in `6.1.1`.

## 6.1.1

#### Bug Fix
- Fix an issue in **&lt;DatePickerInput /&gt;** component when using two such
inputs to define the 'from' and 'to' dates for a date range.  When typing out
either 'from' date or 'to' date (versus using the calendar to select it) both
dates would be cleared due to incorrect logic in the `_onInputChange()` function.

## 6.2.0

#### Feature
- New **&lt;ActivityIndicator /&gt;** component! Whoopee!
- **&lt;Page /&gt;**
  - New Prop: `id`. This prop checks for a `string`.
  - New Prop: `isDataFetching`. This prop checks for `bool`
- New class names based on BEM for when our **&lt;Drawer /&gt;** and **&lt;Page /&gt;** components have an Action Bar.

#### Bug Fix
- Fixed the placement of the anchor icon in **&lt;Header /&gt;**.
- Fixed the `href` prop logic for **&lt;Button /&gt;**.

#### Docs
- New **&lt;ActivityIndicator /&gt;** component documentation.
- New **&lt;Page /&gt;** component documentation.
    - Includes a demo page.
- Removed some of our documentation block code highlighter's height problems.

## 6.1.0

#### Feature
- [PR #57](https://github.com/saddlebackdev/react-cm-ui/pull/57): Adds some new functionality to the **&lt;Page.Container /&gt;**.
    - New prop: `scrollable`. This props adds the ability to horizontally scroll. it sets us up for the new mobile **&lt;Table /&gt;** functionality.
- Refactored how the prop, `id`, was being rendered for **&lt;TimePicker /&gt;**.
- Added a security check around the `onClose` function in **&lt;Drawer /&gt;**.
- **&lt;Drawer.ActionBar /&gt;** and **&lt;Page.ActionBar /&gt;** now use the same ol' code.

#### Bug Fix
- [PR #56](https://github.com/saddlebackdev/react-cm-ui/pull/56): Fixes generating the key for the Page.Table header cell.

## 6.0.2

#### Bug Fix
- All **&lt;Drawer /&gt;** header and content sub components now are positioned correctly.

## 6.0.1

#### Bug Fix
- Removed the `.scss` extension on the color import in **&lt;Image /&gt;**.

## 6.0.0

#### Feature
- [PR #53](https://github.com/saddlebackdev/react-cm-ui/pull/53): Adds some new functionality to the **&lt;Image /&gt;**.
  - New Prop: `border`. This prop checks for one of the following types: `bool` or `number`.
  - New Prop: `borderInverse`. This prop checks for `bool`
  - New Prop: `type`. This prop checks for one of the following strings: `person` or `user`. Leaving this prop as `undefined` gives you the ability to use the component as a basic **&lt;img /&gt;**.

  ##### Breaking Change

    - Removed of **&lt;Image /&gt;**'s `avatar` prop to favor the new `type` prop.


- New color, `colorSubNav`, name added to our `color` function.

#### Bug Fix
- **&lt;Drawer.ActionBar /&gt;** got into a bad state with the last BEM name changes. All fixed.

## 5.2.0

- [#54](https://github.com/saddlebackdev/react-cm-ui/pull/54): Fixes ReactJS `componentWillReceiveProps` warnings about needing to switch to `componentDidUpdate`.
- Upgraded react-reponsive dependency to `7.0.0`.
- Breaking change: updated how we implement our colors in SCSS and JS.
  - You can no longer use `$bkgd` to achieve a hex value from `colors.scss`. Instead, import the same way, and use the function `color(backgroundColor)`.
  - In JS, you can now use our `colors.scss` variables by importing the desired color variable. e.g. `import { backgroundColor } from 'colors.scss'`.
- Breaking change: moved a handful components to the BEM naming convention.
  - **&lt;Drawer.ActionBar /&gt;**
  - **&lt;List /&gt;**
  - **&lt;Page.ActionBar /&gt;**
  - **&lt;Page.Container /&gt;**
  - **&lt;Page.Content /&gt;**
  - **&lt;Page.Details /&gt;**
  - **&lt;Page.FiltersDrawer /&gt;**
  - **&lt;Page.FiltersRail /&gt;**
  - **&lt;Page.Grid /&gt;**
  - **&lt;Page.Table /&gt;**
- **&lt;Page.ActionBar /&gt;** `columns` updates:
  - New `button` property
  - New `list` property
    - New `actionsButton` property
    - New `iconBack` property
    - New `iconFilter` property
    - New `iconGrid` property
    - New `iconSearch` property
    - New `iconTable` property
  - New `search` property

## 5.1.1

- Moved **&lt;Page /&gt;** component and its sub components to the `./src/modules` directory.
- Started a demo for how the **&lt;Page /&gt;** component and its sub components are to look like. It's a work in progress. Please give some grace.
- Changes to **&lt;Page.FiltersDrawer /&gt;**:
  - Fixed the header in this component which broke when we refactored the **&lt;Drawer /&gt;** component.
  - New `rows.items.dropdown` property!
  - New `rows.items.multiSelect` property!
  - New `rows.items.nestedToggles` property!
- New **&lt;Drawer.Details /&gt;** component!
- Exported our `./src/shared/styles/colors.scss` so that we can use the variables in JS. The plan is to remove the hyphenated case variables in this file soon. I decided to forgo for a while due to regressions it would cause.

## 5.1.0

- Applied the **&lt;PhoneInput /&gt;** from `v4.1.4-hotfix` to this release.

## 5.0.6

- Fixed a **&lt;Page.Details /&gt;** bug.

## 5.0.5

- Fixed a **&lt;Page.Details /&gt;** bug.

## 5.0.4

- Added some style capabilities to **&lt;Page.Details /&gt;** and fixed some as well.

## 5.0.3

- Fixed a bug in **&lt;Drawer /&gt;** & **&lt;DrawerDeprecated /&gt;** that caused body class names to be removed when still needed.
- Fixed mobile styling for **&lt;Drawer.Wing /&gt;**

## 5.0.2

- Fixed a bug in **&lt;Page.ActionBar /&gt;**.

## 5.0.1

- Fixed a bug in **&lt;DrawerDeprecated /&gt;**.
- Duplicated **&lt;Drawer.ActionBar /&gt;** in **&lt;Page.ActionBar /&gt;**.

## 5.0.0

- Breaking Change: A brand new **&lt;Drawer /&gt;** component with sub components! We'll be iterating on this and its sub components to help facilitate with building drawer templates. Old **&lt;Drawer /&gt;** component has been deprecated and renamed to **&lt;DrawerDeprecated /&gt;**. Please update your **&lt;Drawer /&gt;** components accordingly.
  - Sub Components:
    - **&lt;Drawer.ActionBar /&gt;**
    - **&lt;Drawer.Content /&gt;**
    - **&lt;Drawer.FiltersDrawer /&gt;**
    - **&lt;Drawer.Grid /&gt;**
    - **&lt;Drawer.Navigiation /&gt;**
    - **&lt;Drawer.Table /&gt;**
    - **&lt;Drawer.TitleBar /&gt;**

## 4.4.1

- Whoops, forgot the **&lt;Page.Details /&gt;** import.

## 4.4.0

- New **&lt;Page.Details /&gt;** sub component!

## 4.3.1

- Whoops, forgot the **&lt;Page.Grid /&gt;** import.

## 4.3.0

- New **&lt;Page.Grid /&gt;** sub component!

## 4.2.3

- Fixed **&lt;Page /&gt;** default background color. It should have always been a light grey.
- Stopped the **&lt;Page.Table /&gt;** row's onClick event handler when selecting text.

## 4.2.2

- Added **&lt;Page.Table /&gt;** sub component scss!

## 4.2.1

- Whoops, removed a `.scss` import from a `.js` file which was causing an error when installing.

## 4.2.0

- New **&lt;Page.Table /&gt;** sub component!

## 4.1.4-hotfix

- Added new **&lt;Phone.Input /&gt;** component.
- Applied the fix from the **&lt;DrawerDeprecated /&gt;** in `v5.0.3` to **&lt;Drawer /&gt;** to this release.

## 4.1.4

- Fixed some **&lt;Page /&gt;** sub component layer issues.

## 4.1.3

- Added some styling to **&lt;Page.Container /&gt;**. I guess, it now does something.
- Made the **&lt;Page.ActionBar /&gt;** sticky.

## 4.1.2

- Upgraded lodash from v.4.17.11 to v4.17.14 to remove a high risk vulnerability.

## 4.1.1

- Whoops, I failed with a SCSS import and couldn't publish. Apologies. The import path is fixed.

## 4.1.0

- A brand new **&lt;Page /&gt;** component with sub components! We'll be iterating on this and its sub components to help facilitate with building page templates.
  - Sub Components:
    - **&lt;Page.ActionBar /&gt;**
    - **&lt;Page.Container /&gt;**
      - doesn't really do much just yet, but will be reserved for constraining content.
    - **&lt;Page.Content /&gt;**
    - **&lt;Page.FiltersRail /&gt;**
    - **&lt;Page.FiltersDrawer /&gt;**

## 4.0.4

- Just one more **&lt;Modal /&gt;** style fixed.

## 4.0.3

- Some **&lt;Modal /&gt;** style fixes to match what's in the design toolkit.

## 4.0.2

- Fixed **&lt;Table /&gt;** `size` to have a min-height instead of using padding to cause that height.

## 4.0.1

- Fixed the compile script to grab images in the new directory.

## 4.0.0

- Changed file structure to use Feature First (Pods).
  - Breaking change if you are linking to `style.css` or the individual `.css` files

## 3.0.2 - 2019-06-20
### Added
- Added a `size` prop to **&lt;Table /&gt;**.

## 3.0.1 - 2019-06-13
### Changed
- Added `files` to package.json and remove .npmignore.js.

## 3.0.0 - 2019-06-12
### Changed
- Fixed security risks caused by dev dependencies.
- Upgraded Webpack from v3 to v4.
- Upgraded Gulp from v3 to v4.

## 2.0.23 - 2019-06-07
### Added
- Added `link-external` to the **&lt;Icon /&gt;** set.

## 2.0.22 - 2019-05-31
### Fixed
- [#49](https://github.com/saddlebackdev/react-cm-ui/pull/49): Fixes initialization of **&lt;Card /&gt;** View.
- Fixed **&lt;Icon /&gt;** svg style.

## 2.0.21 - 2019-05-28
### Added
- Added a left border to the **&lt;Drawer.Wing /&gt;**.

### Changed
- **&lt;Checkbox /&gt;** `label` can either be a string or object.
- An `id` is now applied to the **&lt;Checkbox /&gt;** container as well to its hidden input.

## 2.0.20 - 2019-05-20
### Added
- [#48](https://github.com/saddlebackdev/react-cm-ui/pull/48): **&lt;Button /&gt;** `outline` can have different colors now.

### Fixed
- [#45](https://github.com/saddlebackdev/react-cm-ui/pull/45): **&lt;Avatar /&gt;** (User Icon) Image Fixes/Enhancements
- [#46](https://github.com/saddlebackdev/react-cm-ui/pull/46): Fixes warnings on passing object as title for drawers.

## 2.0.19 - 2019-05-17
### Fixed
- Remove `isOpen` from the **&lt;Drawer /&gt;** & **&lt;Modal /&gt;** `componentWillUnmount`. Hoping this catches all
the different states the drawer can be in. One concern is it removing class names from body when another drawer is
to stay open. We'll need to watch for this problem in the future.

## 2.0.18 - 2019-05-16
### Fixed
- **&lt;Drawer /&gt;** & **&lt;Modal /&gt;** were not cleaning up after themselves when unmounting; they now do.

## 2.0.17 - 2019-05-14
### Fixed
- Whoops! Forgot to check my work and had the **&lt;Modal /&gt;** ZIndexes incorrect.

## 2.0.16 - 2019-05-14
### Fixed
- Fixed a **&lt;Modal /&gt;** bug.

## 2.0.15 - 2019-05-09
### Fixed
- Second attempt to fix the bug in **&lt;Drawer /&gt;** by ensuring the removal of the
`_onClickOutside` event listener.  Since the **&lt;Drawer /&gt;** is used with a
**&lt;Portal /&gt;**, it is not unmounted the way typical components in the regular DOM
tree are, so the prior attempt to remove the event listener on unmount (in
`2.0.14`) was unsuccessful.  Hopefully this version will fare better.

## 2.0.14 - 2019-05-08
### Fixed
- Fixed a bug in **&lt;Drawer /&gt;** by ensuring we remove `_onClickOutside` event
listener on unmount).

## 2.0.13 - 2019-05-07
### Fixed
- CSS for `disabled` **<Dropdown.Item />** when using "dark theme" for the menu.
This was still making the text of the item white, instead of the "static" color
as is proper for a disabled item.

## 2.0.12 - 2019-05-07
### Added
- Ability to mark a **<Dropdown.Item />** as `disabled`.

## 2.0.11 - 2019-05-01
### Fixed
- Removed console logs in **&lt;Drawer /&gt;**.

## 2.0.10 - 2019-05-01
### Fixed
- Fixed a **&lt;Drawer /&gt;** bug.

## 2.0.9 - 2019-04-30
### Fixed
- Fixes the issues when **&lt;Drawer /&gt;** child's `onClose` was overridden.

## 2.0.8 - 2019-04-28
### Added
- **&lt;SubNavigation /&gt;** and its child components accept IDs now.

## 2.0.7 - 2019-04-27
### Added
- **&lt;Tabs /&gt;** and its child components accept IDs now.

## 2.0.6 - 2019-04-27
### Added
- **&lt;Table /&gt;** and its child components accept IDs now.

## 2.0.5 - 2019-04-27
### Fixed
- Added another condition to look if **&lt;Drawer /&gt;** is open before trying to add a style.

## 2.0.4 - 2019-04-26
### Fixed
- Fixed a **<Drawer.Header />** bug.

## 2.0.3 - 2019-04-25
### Fixed
- Fixed **&lt;Banner /&gt;** bug after upgrading to React 16.8.6.

## 2.0.2 - 2019-04-25
### Fixed
- Fixed **&lt;DatePickerInput /&gt;** react-tether component.

## 2.0.1 - 2019-04-25
### Fixed
- Removed **&lt;MenuTree /&gt;**. It was unused and never an officially designed component.
- Upgraded react-tether.

## 2.0.0 - 2019-04-25
### Added
- Added a new **<Drawer.Wing />** color: `grey`.

### Changed
- Upgraded React from version 15.6.2 to 16.8.6.

## 1.20.1 - 2019-04-11
### Added
- **&lt;Card /&gt;** and **&lt;PhoneInput /&gt;** now accept IDs. This is the same change as `v1.19.6`.

## 1.20.0 - 2019-04-09
### Changed
- Upgraded react-dnd.
- Upgraded react-portal which caused some refactoring of our **&lt;Banner /&gt;**, **&lt;Drawer /&gt;**, and **&lt;Modal /&gt;** components.

## 1.19.6 - 2019-04-11
### Added
- **&lt;Card /&gt;** and **&lt;PhoneInput /&gt;** now accept IDs.

## 1.19.5 - 2019-04-09
### Added
- **&lt;Prompt /&gt;** now accepts an ID.

### Fixed
- **&lt;Radio /&gt;** does not allow a click to happen when disabled.

## 1.19.4 - 2019-04-04
### Added
- **&lt;DropdownItem /&gt;** and **&lt;Banner /&gt;** implements the `id` value passed to them now.

## 1.19.3 - 2019-04-04
### Fixed
- Fixed a bug when a selected **`<DatePickerInput />`** and  **`<DatePickerCalendar />`** day is on an day that has an event.

## 1.19.2 - 2019-04-01
### Fixed
- **`<DatePickerInput />`** and  **`<DatePickerCalendar />`** allow `null now`.
- The `onChange` event handler will not fire if **`<DatePickerInput />`** and  **`<DatePickerCalendar />`** is disabled.

## 1.19.1 - 2019-03-28
### Added
- `<DatePickerInput />` and `<DatePickerCalendar />` modules get a much needed - forgotten - `style` prop.

### Fixed
- Changed the `<Icon>` display property from `inline-block` to `inline-flex` to fix some alignment issues throughout HC.
- Removed the `<button>` wrapping caret icons in `<Input />`.

## 1.19.0 - 2019-03-28
### Deprecated
- `<DatePicker />` has been **deprecated**. Please use [DatePickerInput](http://cm-ui-docs.saddleback.com/modules/date-picker-input) or [DatePickerCalendar](http://cm-ui-docs.saddleback.com/modules/date-picker-input). `<DatePicker />` will be removed in the next major version of react-cm-ui.

### Added
- New `<DatePickerInput />` and `<DatePickerCalendar />` modules.

## 1.18.11 - 2019-03-20
### Fixed
- Rearranged the placement of where we render the **Dropdown** `id`.

### Added
- Added the prop `id` to **Accordion**.

## 1.18.10 - 2019-03-04
### Fixed
- Removed `componentDidUpdate` from **Input** to fix some state issues when using an `onChange` event handler. :)

## 1.18.9 - 2019-02-26
### Fixed
- Upgraded `lodash` dependency to fix a possible security vulnerability
identified by `npm audit`.

## 1.18.8 - 2019-02-26
### Fixed
- `1.18.6` inadvertently caused some browsers to show a gray background for the
**Input** type `number` spin box controls (up and down arrows), likely due to
user agent defaults for button elements.  This patch sets a transparent
background color for these.

## 1.18.7 - 2019-02-26
### Added
- Added `200` and `300` as font-weight options to the sans serif font.

## 1.18.6 - 2019-02-26
### Fixed
- Fixed **Input** type `number` controls. Changed icons to buttons to stop the
highlighting of elements around the **Input**. Also, when `min` and `max` are set
values are kept between the two when using the controls.

## 1.18.5 - 2019-02-22
### Fixed
- Fixed an issue with **DurationPicker** component; it was not initializing
its internal state properly when a `value` prop was specified, so it was not
showing the initial value until a re-render.

## 1.18.4 - 2019-02-20
### Fixed
- Fixed **DatePicker** value when the date value is cleared.

## 1.18.3 - 2019-02-11
### Added
- Added `phone-cell`, `phone-home`, and `phone-work` to the **Icon** set.

## 1.18.2 - 2019-02-01
### Added
- Added `bell-recurring` the **Icon** set.

## 1.18.1 - 2019-01-25
### Added
- Add `id` prop to **Button** and **Dropdown** components.

## 1.18.0 - 2019-01-23
### Added
- Added new **DurationPicker** component.
### Fixed
- Fixed some issues with **Input** with `disabled` prop set.  It was still
doing state changes and calling `onChange()` so it was not acting disabled, even
if it was visually styled to appear disabled.

## 1.17.9 - 2019-01-17
### Fixed
- Fixed a bug in the **Accordion** component.  When using it in exclusive mode,
you were unable to pass the value `0` to the `selected` prop to default select
the first item.  This was due to standard JavaScript truthy/falsy silliness;
`0` is falsy so a naive check for whether the prop was specified resulted in
falling back on `-1` (nothing selected) as a default when `0` was the specified
value.  Converted this to use Lodash's `_.isNil()` function for a more precise
check, and life is good!

## 1.17.8 - 2019-01-10
### Added
- Add `multi` property to **Radio** component.  This allows multiple selections
(which is useful in combination with `pill` for certain desired UI elements; see
#35)

## 1.17.7 - 2018-12-21
### Fixed
- As a further update to **1.17.6**, ensure that click event propagation is stopped
when a disabled **Checkbox** is clicked.

## 1.17.6 - 2018-12-21
### Fixed
- Fixed a bug in the **Checkbox** component.  It was calling `onChange` even when the
`disabled` prop was set to `true`.  The upshot of that is, when used as a controlled
component, disabled Checkboxes were not quite as disabled as we might have liked! =)

## 1.17.5 - 2018-12-14
### Changed
- Fixed time zone select placeholder text (and added ability to specify it via prop) in **TimePicker** component.

## 1.17.4 - 2018-11-29
### Changed
- Fixed `zoneMatchProp` prop in **TimePicker** component.

## 1.17.3 - 2018-11-28
### Added
- Added `selectionMatchProp` prop in **Dropdown** component.

## 1.17.2 - 2018-11-04
### Changed
- `Dropdown` `onClick()` that was added in `1.17.1` has been removed and replaced with `onOpen()` and `onClose()`.
- `Dropdown` documentation page samples with user avatar images refactored to use local image files as the sample avatar
service we were previously using does not support HTTPS.  This way we can avoid mixed content issue if the documentation
site is viewed over HTTPS.

## 1.17.1 - 2018-11-01
### Added
- Add `onClick()` event to `Dropdown`.  This will be called whenever menu is expanded/collapsed, passing a Boolean
argument to indicate whether the menu is open (true) or closed (false).

## 1.17.0 - 2018-10-31
### Added
- Ability to edit and delete comments via the **Comment** component.
- Ability to instruct **Dropdown** to collapse the menu on change imperatively using new `collapseMenuOnChange` Boolean
prop regardless of whether or not it's a controlled component and there is a `value` prop change.
- Ability to set the title/tooltip for the **Icon** embedded within the **Dropdown** (via new `iconTitle` prop).
- Ability to set **Dropdown** color to `transparent`.
### Changed
- Bug fix in logic within **Dropdown** to update selected value state and collapse the menu on prop change.  Also converted
this from legacy `componentWillReceiveProps()` to proper `componentDidUpdate()`.
- Set some reasonable default behavior around **Icon** tooltip within the **Dropdown** (utilizing `placeholder` and/or `text`)
props when new `iconTitle` prop is not specified.
- Numerous enhancements to the documentation pages for **Dropdown** and **Prompt** components, including an example of
how to wrap a **Dropdown** with a **Prompt** but only have some options trigger the prompt but not others.  Also corrected
some typos and such.

## 1.16.3 - 2018-10-24
### Changed
- Nothing new; same as described in  **1.16.2**.  Due to some git user errors made by Geoffrey, `1.16.2` didn't contain the changes it
was supposed to.  And `npm` does not allow re-publishing the same version (see [here](https://blog.npmjs.org/post/77758351673/no-more-npm-publish-f)).  So I'm going to publish the corrected package as
`1.16.3` and remove `1.16.2`.  Sorry about that.

## 1.16.2 - 2018-10-24
### Changed
- **Image** component was updated to improve behavior in `avatar` mode.  Previously, if a consumer specified both `name`
and `src` props, the component would happily render _both_ the image _and_ the initials.  :man_facepalming:  That meant
that it was up to consumers to conditionally pass a `name` prop or not.  Now, the component itself has been fixed to do
the right thing.
- Also, the documentation page for the **Image** component should now correctly render the sample image.

## 1.16.1 - 2018-10-10
### Changed
- **Drawer** dimmers bug fix.

## 1.16.0 - 2018-09-25
### Added
- Added `showSpinners` prop in **Input** component.  When the `type` is "number" this new prop dictates whether or not
to show the "spin box" up and down arrow controls.  The new prop, which is optional, defaults to `true` and the spin box
controls are shown.  Set it to `false` to suppress these if you want a numeric input without them.

## 1.15.0 - 2018-09-21
### Added
- Added a CSS rule `.color-highlight`.

## 1.14.0 - 2018-09-18
### Changed
- Fixed a bug in **Dropdown** when passing a null child.

## 1.13.24 - 2018-09-18
### Changed
- **PhoneInput** Fixed bug affecting U.S. phone numbers specified without leading `+1` and with area codes with `1` in
the middle, e.g. 213, 714, etc.  These phone numbers were being mishandled.

## 1.13.23 - 2018-09-18
### Added
- **InfoBar** `color` goes to 11.

### Changed
- Fixed **Drawer's** `maxWidth` problem when opening a drawer that is not by default 768px.
- Big Change. **Container.ActionBar** now has a minimum height of 70px and has been changed to flex to align its items.

## 1.13.22 - 2018-09-14
### Changed
- Removed the fill attribute from the `<use>` within our **Icon's** SVG markup.

## 1.13.21 - 2018-09-14
### Changed
- Fixed some styling in the **Comment** component.
- Fixed **Comment** time bug.

## 1.13.20 - 2018-09-12
### Added
- **Comment** component's CSS now handles line breaks.
- Added `onAutoHeightResized` prop to **TextArea**.

## 1.13.19 - 2018-09-11
### Changed
- Cleaned up the **Comment** code.

## 1.13.18 - 2018-09-11
### Added
- Added `detailsPosition` prop to **Comment**.

### Changed
- The **Comment** not need any details.

## 1.13.17 - 2018-09-09
### Changed
- Removed **Drawer** wing JSX when there's no wing to ever be rendered.

## 1.13.16 - 2018-09-07
### Added
- Added the ability to change the **Drawer's** `maxWidth` on the fly.

## 1.13.15 - 2018-09-07
### Changed
- Fixed **Drawer's** transitionend event.

## 1.13.13 - 2018-09-05
### Changed
- Resize Window event handler for **Dropdown** menu
- Improved estimation of direction to open **Dropdown** window

## 1.13.12 - 2018-08-24
### Changed
- Removed `value` from **TextArea's** state.

## 1.13.11 - 2018-08-24
### Changed
- Fixed **TextArea's** `autoHeight` when no `value` is controlling textarea.

## 1.13.10 - 2018-08-24
### Added
- **TextArea's** `onChange` handler is now passing `event`.

## 1.13.9 - 2018-08-24
### Added
- Ugh, forgot to save a fix to **TextArea** (`columns` to `cols`) before releasing the last version.

## 1.13.8 - 2018-08-24
### Added
- Added `columns` and `rows` props to **TextArea**.

## 1.13.7 - 2018-08-24
### Added
- Added `secondary` color name to the Utils.js color function.

### Changed
- Fixed a **List** bug.

## 1.13.6 - 2018-08-22
### Added
- Added a new **Button** prop, `iconPosition`.

### Changed
- Fixed **Dropdown** button icon size.

## 1.13.5 - 2018-08-22
### Added
- Added a new **Button** color, `secondary`.
- Added a new **Dropdown** `buttonColor`, `secondary`.
- Added `name` to **Image** in order to show initials.

### Changed
- Fixed **Dropdown** menu spacing.
- Updated **Dropdown** to use highlight background color when active.

## 1.13.4 - 2018-08-22
### Changed
- **Icon** now supports an optional `title` prop that can give it a tooltip.

## 1.13.3 - 2018-08-03
### Changed
- **List** is now checking if a child a null or undefined and if so will not return the "child."

## 1.13.2 - 2018-07-31
### Changed
- **PhoneInput** `isValueComplete` now checks to see if the value is not empty.

## 1.13.1 - 2018-07-31
### Changed
- Flipped **Card's** collapsable icon around.

## 1.13.0 - 2018-07-31
### Added
- Adds an option for a drawer to open from a left side (also support second wing and other drawer features). PR #26

## 1.12.5 - 2018-07-24
### Changed
- Fixed a **Drawer** bug not cleaning up drawer class names when being unmounted.

## 1.12.4 - 2018-07-23
### Changed
- Removed `header === true` from the **Drawer** children statement. It's checking only to see if the child is a function/component.

## 1.12.3 - 2018-07-23
### Added
- **Icon's** now have a smooth color transition.

### Changed
- **Button** has a new style property when `color="outline"` and `inverse` is passed.
- **InfoBar** renders children differently now.
- The **Drawer** component now clones custom close buttons and gives it a proper class name.

## 1.12.2 - 2018-07-18
### Added
- New **PhoneInput** `onCountryChange` function prop.

### Changed
- Enhanced the documentation/sample for **PhoneInput**'s `onChange` to show all the parameters it passes.

## 1.12.1 - 2018-07-17
### Changed
- Fixed **Button** padding when there's an **Icon**.

## 1.12.0 - 2018-07-16
### Added
- New **Comment** component.
- New **Dropdown** `selectionUnderline` prop and `buttonColor` color additions.
- New **Image** `size` prop.
- New **Drawer.Wing** subcomponent to **Drawer**.

### Changed
- Removed **InfoBar.Drawer** from **InfoBar**.

## 1.11.17 - 2018-07-20
### Added
- New **PhoneInput** `onCountryChange` function prop.
  - (This was originally included in the `1.12.2` release but we needed it in `1.11.x` so hence this "hotfix")

### Changed
- Enhanced the documentation/sample for **PhoneInput**'s `onChange` to show all the parameters it passes.

## 1.11.16 - 2018-07-16
### Changed
- **PhoneInput** passes a new `isValueComplete` parameter in place of `format`.

## 1.11.15 - 2018-07-10
### Changed
- Removed a warning that **Dropdown** was throwing.

### Added
- Added two new **PhoneInput** parameters `dialCode` and `format`.

## 1.11.14 - 2018-06-28
### Added
- Added two new **Drawer** props: `onCloseComplete` and `onOpenComplete`.

## 1.11.13 - 2018-06-28

## 1.11.12 - 2018-06-28
### Changed
- Fixed **TimePicker's** actionable **Icon** `type`.
- Upgraded `react-text-mask` to `v.5.4.1`. This version has been pinned as well, because of a bug in `v.5.4.2`.
- Fixed **Table.HeaderCell** basic clickable style.

## 1.11.11 - 2018-06-15
### Added
- New **Rail** component.
- New `labelClassName` and `labelWeight` for **Checkbox**.
- New **InfoBar** component.

## 1.11.10 - 2018-06-14
### Added
- New `size` prop for **Checkbox**. You can now have a default size (large) and a small checkbox.
- New `inverse` prop for **List**.
- New `autoFocus` prop for **Input** and **TextArea**.

### Changed
- Fixed Checkbox to be always be a controlled input in order to quiet down the console.
- New `transition` css property to animate the `background-color` and `border-top-color` on hovering over a **Table.Row**.
- Removed the **ListItem** file and and defined the correct **List.Item** component. This also removes the **List.Item** style type warning.

## 1.11.9 - 2018-06-11

## 1.11.8 - 2018-06-11
### Added
- Sort of have documentation for **List**. They are really just examples I tested with.
- Add a **Chart** module that uses `highcharts`.

## 1.11.7 - 2018-06-08
### Changed
- Changed **Card.Header** gradients.

## 1.11.6 - 2018-06-08
### Changed
- New font size and weight for **Table.Header's** **Table.Cell** when not clickable.

## 1.11.5 - 2018-06-06
### Changed
- Removed a `console.log` from **Card**.

## 1.11.4 - 2018-06-06
### Changed
- Fixed how **Card** renders its header.

## 1.11.3 - 2018-06-06
### Changed
- Fixed a missing `className` and `fill` from an SVG `<use>`.

## 1.11.2 - 2018-06-06
### Changed
- Fixed an issue with Firefox not displaying the new **Icons**.

## 1.11.1 - 2018-06-06
### Changed
- Fixed a bug when passing `null` as a child of **Card**.
- Fixed **Card.Header** gradient positions.

## 1.11.0 - 2018-06-06
### Added
- Added ability to have a custom header in a **Card**.

### Changed
- Removed icon font and replaced with SVG icons.

## 1.10.3 - 2018-05-18
### Changed
- **Input's** action icon container is now adjusted according to the top position of the input that's relative to the components wrapping container.

## 1.10.2 - 2018-05-18
### Changed
- Squashed a bug when a **Input** had actionable icons causing an enduser to be able to enter a value.
- Fixed Dropdown's select dropdown position styling.

## 1.10.1 - 2018-05-15
### Changed
- **DatePicker** patch.

## 1.10.0 - 2018-04-30
### Changed
- Moved **Input's** label adjacent to the input and added a new prop `labelPosition`.

## 1.9.2 - 2018-04-10
### Changed
- Added **Dropdown** `onChange` example.
- Added two new icons to **Icon**: `info` and `question-circle`

## 1.9.1 - 2018-03-28
### Changed
- Fixed a bug in `./src/scss/components/Views/TitleBar.scss` upon publishing the package.

## 1.9.0 - 2018-03-28
### Added
- New **Image** component. Only is for a basic avatar for now. Updates expanding the component will happen down the road.

### Changed
- **TitleBar** now supports `subTitle` and `children`.

## 1.8.27 - 2018-03-22
### Added
- New `circle-filled` icon type.

### Changed
- Fixed some styling in Firefox for **Tabs**.
- **TitleBar** now truncates long titles on smaller viewports.

## 1.8.26 - 2018-03-20
### Changed
- **Modals** and **Drawers** no longer remove the scrollbar causing side effects in the background.
- PR #21 fixed a **Input** bug having to do with the `onChange` event handler when the `type` was set to `number`. Thanks @gbulatov!

## 1.8.24 - 2018-03-05
### Changed
- Changed how `browserDetect()` detects the browser.

## 1.8.21 - 2018-03-01
### Added
- react-dnd is now a part of react-cm-ui.

## 1.8.19 - 2018-02-22
### Change
- Disables a collapsable **Card's** content height when already collapsed.

## 1.8.17 - 2018-02-21
### Change
- Fix for dynamically changing a collapsable **Card's** content height.

## 1.8.16 - 2018-02-13
### Added
- ISO2 and dial codes are now searchable in **InputPhone**.

## 1.8.15 - 2018-02-07
### Added
- Added ability to collapse a **Card**.

## 1.8.14 - 2018-02-02
### Added
- Added ability to give a **PhoneInput** flag dropdown a different arrow icon.
- Added ability to style a **PhoneInput** container.

## 1.8.13 - 2018-02-02
### Added
- Added ability to give a **Dropdown** select a different arrow icon.

## 1.8.12 - 2018-01-31
### Added
- Added ability to adjust a **Modal's** height according to its content.

## 1.8.11 - 2018-01-20
### Changed
- Fixes the onClick event and styling for a **Radio's** `pill` UI while being `disabled`.

## 1.8.10 - 2018-01-19
### Changed
- Added a bottom divider to a `basic` **Table's** last row.
- Removed `.ui` from a **Table's** children components.
- Fixed a **Header** error when having an icon and sub header.

## 1.8.9 - 2017-12-12
### Changed
- merged PR #18: DatePicker tweaks for using it in `dateRange` mode.

## 1.8.8 - 2017-12-02
### Changed
- Fixed `./lib/css/components` image url paths.

## 1.8.6 - 2017-12-02
### Added
- `./lib` now has all the individual `.css` files to import.

## 1.8.5 - 2017-12-02
### Changed
- Removed PropTypes warnings.

## 1.8.3 - 2017-11-15
### Changed
- Cleaned up conditions around `min` and `max` props for **Input**.

## 1.8.2 - 2017-11-08
### Changed
- Changed `scrollContainerClassName` to `scrollContainer` so we can also pass a node and not just a string.

## 1.8.1 - 2017-11-08
### Changed
- Fixes and code clean up to **Accordion**. Whoops.

## 1.8.0 - 2017-11-08
### Changed
- **Accordion** looks to see if an **Accordion.Item's** content is below the fold and if it is the end user's container/window will scroll up.
- **Dropdown** looks to see if the Select's dropdown is below the fold and if it is the dropdown will be render above.
- Fixes to **SubNavigation** when rendering only one tab.

## 1.7.11 - 2017-10-30
### Added
- **Banner** has a new prop, `topPosition`.

## 1.7.10 - 2017-10-30
### Changed
- `DOMUtils`' `browserDetect()` is case-sensitive and Firefox was all in lowercase. Fixed!

## 1.7.9 - 2017-10-30
### Added
- Added `level` colors to **Banner**. These two new colors, `purple` and `teal`, need to be defined some time by the design team and renamed by us in the future.

## 1.7.8 - 2017-10-27
### Changed
- Fixed the browser variable in `DOMUtils`.

## 1.7.7 - 2017-10-27
### Changed
- Added the new icons to docs.

## 1.7.6 - 2017-10-27
### Added
- Two new icons: "duplicate" and "users".

## 1.7.5 - 2017-10-24
### Changed
- Fixed the **Modal**'s `closeButton` boolean condition.

## 1.7.4 - 2017-10-23
### Changed
- Updated **Modal** to work a little more like the **Drawwer**.

## 1.7.3 - 2017-10-23
### Added
- `DOMUtils`'s `browserDetect()` now checks for Firefox too.

## 1.7.2 - 2017-10-21
### Added
- New icon "ban".

## 1.7.1 - 2017-10-10
### Changed
- The **Phone Input's** emojis were not working cross OS'. Switched to a flag CSS icons that will work for folks.

## 1.7.0 - 2017-10-09
### Added
- Brand spanking new **Phone Input**.
- New **Dropdown** `selectionValueComponent` & `searchable` prop.

### Changed
- **Input** now handles the `tel` type value correctly.

## 1.6.0 - 2017-10-03
### Changed
- Bumped React from version `0.14.8` to version `15.6.2`.

## 1.5.5 - 2017-09-28
### Added
- Fixes **Dropdown's** `inverse` & `selection` input value not appearing when searching.

## 1.5.4 - 2017-09-28
### Added
- Fixes **Dropdown's** `inverse` & `selection` value not appearing when input is focused.

## 1.5.3 - 2017-09-26
### Added
- New text color class name, `color-warning`.
- Added an `inverse` prop to **Dropdown**. Only works for selections for right now.

## 1.5.2 - 2017-09-22
### Changed
- **Input** value fix.

## 1.5.1 - 2017-09-22
### Added
- New **Input** props: `max` and `min`.

### Changed
- **Input's** value accepts numbers now.

## 1.5.0 - 2017-09-20
### Added
- New **Prompt** component. Only handles inline prompts for now.

### Changed
- Changed *Button's** onClick handler back to older es6 for now.

## 1.4.5 - 2017-09-18
### Changed
- Changed *Button's** onClick handler method.

## 1.4.4 - 2017-09-06
### Added
- Added `className` to **Accordion.Item**.

### Changed
- Fixed some **Accordion.Item** styling.

## 1.4.3 - 2017-09-06
### Changed
- **Accordion** now allows for custom content within **Accordion.Item** using the `summary` prop.

## 1.4.2 - 2017-09-05
### Changed
- **Checkbox** onClick is now passing the event the parent handler.

## 1.4.1 - 2017-09-01
### Changed
- Fixed a key warning that was being thrown by **Accordion**.

## 1.4.0 - 2017-09-01
### Added
- **Accordion** can be inclusive by passing `false` using the new props, `exclusive`.
- **Accordion's** can now be nested in **Accordion's**.

### Changed
- A `basic` **Accordion** that uses Summary and Content containers is now styled.

## 1.3.3 - 2017-08-30
### Changed
- Changed the **Divider's** primary color and removed `color="light"`.

## 1.3.2 - 2017-08-30
### Added
- New `labelStyle` prop added to **Input**, **Dropdown**, and **TextArea**.

### Changed
- Removed a **Loader** warning in Chrome.
- **Drawer** dimmer saturation experiment.

## 1.3.1 - 2017-08-25
### Changed
- Fixed the way **Input** number controls were adding and subtracting. Whoops. :)

## 1.3.0 - 2017-08-25
### Added
- New number **Input**.

## 1.2.1 - 2017-08-24
### Changed
- **Button**'s vertical alignment when having an icon is now aligned.
- **Drawer.Header** is aligned to mockups more appropriately.
- **Radio** has a `margin-right: 22px` now instead of `margin-right: 11px`.
- Moved **Dropdown**'s required indicator to the right of the label and actually styled the asterisk.
- Elements adjacent to **Dropdown**, **Input**, and **Textarea** now has a `margin-top: em(26);`.
- Elements adjacent to **Dropdown** now has a `margin-top: em(26);`.

## 1.2.0 - 2017-08-24
### Added
- New **Radio** pill grouping.

### Changed
- Removed **Drawer**'s close button container height.
- Moved **TextArea**'s required indicator to the right of the label.
- Changed **Input** and **TextArea**'s required indicator negative space.

## 1.1.8 - 2017-08-19
### Added
- New **Header** prop, `weight`. enums: `bold`, `normal`, and `semibold`.

### Changed
- Moved **Input**'s required indicator to the right of the label.
- Changed **Drawer**'s inner container to have a bottom padding.
- Changed icon font name.
- **Icon** type `times` is now bigger.

## 1.1.7 - 2017-08-19
### Added
- New **Button** prop, `relax`.
- New **Divider** color, `light`.
- New global text color, `color-success`

## 1.1.6 - 2017-08-19
### Added
- **Dropdown** (not selections) menu's now detect if they are in the viewport.
- Added a `browserDetect` function.

### Changed
- Removed the filter blur for when a **Drawer** is open.

## 1.1.5 - 2017-08-11
### Removed
- **TreeMenu** removed.

## 1.1.4 - 2017-08-04
### Added
- Added a `filter` icon.

### Changed
- **Divider**: `relaxed` prop now accepts the string `very` to add even more negative space.
- **Icon**: fixed the color `warning`.
- **Icon**: removed temporary spinner icons and just left the one that looks the best.

## 1.1.3 - 2017-08-04
### Changed
- **Drawer**: Removed `setState` and replaced with `style.paddingTop` in the `_onUpdate` function.

## 1.1.2 - 2017-08-03
### Changed
- Added a `warning` (orange) color to **Button**.
- Added `onUpdate` to **Drawer**.
- Removed `ignorePadding` from **Drawer**.

## 1.1.1 - 2017-08-03
### Changed
- Upgraded extract-text-webpack-plugin.

## 1.1.0 - 2017-08-01
### Changed
- Ability to add **Drawer.Header** to a component child. The ability to pass props: `onClose`, `title` and etc from **Drawer.Header** is now obsolete. Props must be passed from the parent **Drawer** instead.
- Added the ability to have an **Icon** along with a placeholder in the **Dropdown** component.
- Fixed **Dropdown**'s disable background color.
- Importing **BannerItem** in **Banner** now.

## 1.0.2 - 2017-06-29
### Changed
- A fix for the UI docs website.

## 1.0.1 - 2017-06-28
### Changed
- Fixed Doc's **Grid.Column**

## 1.0.0 - 2017-06-21
### Added
- Official first release of the React Church Management UI Library.

## 0.14.0 - 2017-06-12
### Added
- New **Banner** view component.

### Changed
- Moved **SegmentedControls** to Modules.
- Moved **Accordion** to Modules.
- Moved **SubNavigation** to Modules.
- Docs' code has been split and chunked. I've been looking into speeding up the end-user's user experience when first loading the app.

## 0.13.1 - 2017-06-01
### Changed
- Layered **Drawer** shadows have been fixed.

## 0.13.0 - 2017-05-31
### Added
- Added **Label** documentation.

### Changed
- Moved **Accordion** to Collections.
- Fixed the **Accordion** Item to have a `5px` top margin.
- Refactored the **Label** component.
- **Checkbox** check is now `10px`.
- Fixed the **TextArea** `autoHeight` on render.

## 0.12.10 - 2017-05-26
### Changed
- **Dropdown** `value` prop update: now accepts propTypes `number` and `string`.

## 0.12.10 - 2017-05-20
### Changed
- Added `onMonthChange` prop to **DatePicker**.

## 0.12.9 - 2017-05-19
### Changed
- The inner wrap for a **Button** now is a `flex` box type. This will fix the alignment issues when some buttons have icons and other do not.
- **Checkbox** new prop: `inverse`.

## 0.12.8 - 2017-05-17
### Changed
- Removed **Container** `actionBar` prop and create a new sub component **Container.Actionbar**
- Style refinements to **Drawer.Header**

## 0.12.7 - 2017-05-17
### Changed
- **Button** color prop update: `transparent`.
- **Container** color prop update: `transparent`.
- **Label** style refinements and code cleanup.
- **Drawer.Header** new prop: `inverse`.

## 0.12.6 - 2017-05-15
### Changed
- **Radio**'s have a right margin now.
- New **Drawer.Header** prop: `titleTruncate`.
- New **Header** prop: `title`.

## 0.12.6 - 2017-05-12
### Changed
- `<SegmentedControls.Item>` is now a capability with the **SegmentedControls** component.
- Fixed **Drawer** close button right margin.
- Changed `height` to `min-height` in the **Container's** style.

## 0.12.5 - 2017-05-09
### Changed
- New **Drawer** `path` prop to handle route path changes.

## 0.12.4 - 2017-05-09
### Changed
- Updated **Drawer** & **Input** documentation to have anchor tags.

## 0.12.3 - 2017-05-05
### Added
- new **Dropdown** props: `fluid` and `label`.
- new **Container** prop: 'actionBar'

### Changed
- Changed the **Drawer** top padding.
- Added a `Variable.scss` config file. Right now the only variable in there is CM's `$nav-width`.
- Fixed padding for **SubNavigation** when in a drawer and in a mobile view.

## 0.12.2 - 2017-05-04
### Added
- A new **List** common component. There isn’t documentation for this yet.
- A new **Container** common component. There isn’t documentation for this yet.
- **Input** and **TextArea** adjacent selector has been changed to a wildcard.

### Changed
- Added a `buttonColor` prop to **Dropdown**.
- Two new icons: `cog` and `comment-sms`
- **Icon** now has a `disable` prop.
- Added a `labelStyle` **Checkbox** to style a Checkbox’s label content.
- **Tabs.Item** style prop has been fixed. It previously wanted a string. Wrong! Now is an object.
- **TableRow** has a new `selected` prop. Yay!
- **TableHeaderCell** now wants to know if the responsive width might either be `true` or `auto`. Also added the `collapsing` prop this component.
- **TableCell** now wants to know if the responsive width might either be `true` or `auto`.
- Added some more logic to **GridColumn** responsive props. Now accounts for if the responsive width is a `bool` or `auto`.
- **Drawer** header and yPos scrollbar now have a 'z-index' to help with layering.

## 0.12.1 - 2017-05-01
### Added
- Container component. (No documentation for this component yet.)

### Changed
- `<Tabs.Item>` is now a capability with the Tabs component.
- Fixed Tabs component not indicating that there are more then three or more tabs.
- SubNavigation Items do not wrap and can now be scrolled.
- Added `z-index` of 1 to TitleBar.

## 0.12.0 - 2017-04-26
### Added
- Time Picker component and documentation

### Changed

## 0.11.1 - 2017-04-13
### Added

### Changed
- Fixed Drawer's `inverse` prop and added an example.

## 0.11.0 - 2017-04-13
### Added

### Changed
- You can now use `<Grid.Column>` or `<Grid.Row>` in order to not import the subcomponents in the parent.
- `<Grid.Column>` has a new way of specifying how wide a given column should be. Before: `width={2}` (2 / 12). Now: `width={3}` will be 3 columns wide.

## 0.10.0 - 2017-04-12
### Added
- Updated icon `chevron-...` type name to `chevron-wh-...` and added another lighter chevron to the mix.
- Added colors to Button.
- A beautiful Dropdown component.

### Changed
- Refactored Drawer's header. Now accepts header children.
- Removed Drawer's dimmer saturation and expanded the blur from 1px to 5px.
- Refactored Drawer's onClickOutside logic.
- SubNavigation component now has subcomponent capability. e.g. `<SubNavigation.Item />`.
- Moved `import 'TypographyDeprecation';` into `./src/scss/components/App/CoreApp.scss` in order to have Docs and CM use the same `Typography.scss` file. What this change does: brings the new text rules into CM so we can utilize the new font rules that is taking place of what has been deprecated.

## 0.9.0 - 2017-04-05
### Added
- CoreAppNavigation items now close when the menu is in mobile view.
- Added `react-select` to navigation's Packages section.

### Changed
- Upgraded `react-responsive` from 1.2.6 to 1.2.7 to remove an unmet peer dependency error in console.
- Upgraded `react-select` from 0.9.1 to 1.0.0-rc.3.
- Removed prop `square` and reclaimed prop `icon` for Button.
- Refactored Drawer's header. Now accepts header children.
- Removed Drawer's dimmer saturation and expanded the blur from 1px to 5px.

## 0.8.0 - 2017-03-24
### Added
- Added Accordion component and documentation.
- Added Loader component and documentation.
- Added Drawer component and documentation.
- Added Divider component and documentation.
- Added ability to give a Header component an anchor.
- Added ability to rotate an Icon.
- Added ability for a Button to be square to be used with an Icon.
- Added Modal component and documentation.
- Button example page now has a disabled sample. Sorry folks.
- Added react-portal to the navigation

### Changed
- Removed `$border-grey-NUMBER` variables.
- Fixed padding on buttons in Sub Navigation component.

## 0.7.1 - 2017-03-08
### Added
- Added icon set to Icon page.
- Updated style guide files to v.1.6.2.

### Changed
- SubNavigationItem's now have an onClick prop.

## 0.7.0 - 2017-03-07
### Added
- Added Segmented Controls component and documentation.

### Changed
- Removed the docs `<PanelHeader />` component.
- Removed `$bkgd-` color variable names. (`$border-` color variable names, you're coming next. Yeah, it's a threat.)
- Fixed the height of single line inputs, which caused a chain effect needing the text area to also be updated.
- Renamed `Tab.react` to `TabsItem.react`.

## 0.6.0 - 2017-03-03
### Added
- TextArea component and documentation.
- Checkbox Input component and documentation.
- Radio Input component and documentation.
- Navigation now has a `is-active` class on items.

### Changed
- Moved Tabs to Collections. (don't know how I missed that I put the component in the wrong category.)
- Fixed the Props table to a little more mobile friendly.
- Fixed bottom padding in navigation.
- Removed wrong Grid props and supplied the appropriate props for `<Grid />`

## 0.5.0 - 2017-03-02
### Added
- Sub Navigation component and documentation
- Added `react-select` to the navigation's list of UI packages that we use.

## 0.4.0 - 2017-03-01
### Added
- Added a `Views` section.
- Added a `Tabs` documentation to Views.

### Changed
- Moved `Cards` and `TitleBar` to `Views` section.
- Fixed Button documentation Icons samples.

## 0.3.0 - 2017-02-17
### Added
- Start and End Service period text to help enduser on what to do.
- Added labels to from and to date range inputs
- You can now provide an array of events to Date Picker for the day to be marked that there are events.
- Button now has a width attribute to make a button a fixed width.
- Buttons grow larger in height when viewport less than 768.
- Input component and documentation is now complete.
- New Icon font files and styles.
- Icon documentation.
- Date Picker documentation.

### Changed
- Uncommented Date Picker link in the navigation.
- Date Picker's are set to a fixed width now.
- Date Picker apply is static/disabled until dates have been selected.
- Fixed Card component onClick event causing error.
- Date Picker day hover background color.
- Version number updated to 0.0.5 in the Navigation
- Fixed onKeyDown problems existing when tabbed or returned
- Fixed Date Picker input date not passing value.
- Removed button sizes.
- Updated style guide files.

## 0.2.0 - 2017-02-16
### Added
- Added a build-docs script to `package.json`.
- Mobile first style logic with new mobile header.
- Card component and documentation.
- Title Bar component and documentation.
- Table responsive width example.
- Code css rule to highlight code on the frontend better.

### Changed
- Changelog list of changes and adds since 2017-02-01.
- Commented out Date Picker in the navigation.
- Changed docs build directory to `./docs/build`.
- Date Picker component misc. updates and fixes. (still a work in progress)
- Grid Text Align Sample fix.
- ColorNew config file variable updates. (still a work in progress)
- Updated color documentation.
- TypographyNew base file font color selectors.
- Updated structure of docs app. (title bar, props in card, etc)
- Button documentation fixes.

## 0.1.0 - 2017-02-08
### Added
- New Webpack config file for docs and client.
- Date picker files. (still a work in progress)

### Changed
- Moved docs directory into `./client/`
- Moved JS UI components into `./client/js/components/UI`
- Moved SCSS UI components into `./client/scss/components/UI`
- Updated ColorsNew config file (still a work in progress)
- Changed colorEnums 'secondary' to 'alternate'

## 0.0.2 - 2017-02-01
### Added
- Table Component responsiveness

## 0.0.1 - 2017-02-01
### Changed
- Migrated docs to the CM Repo
