'use strict';

import PropTypes from 'prop-types';
import React from 'react';
import { Banner, Card, Comment, Header, Image, TitleBar } from 'react-cm-ui';

// Docs UI Components
import Block from '../app/block.js';
import Highlighter from '../app/highlighter.js';
import Main from '../app/main.js';
import TableProps from '../app/tableProps';

const commentSample = `import React from 'react';
import { Comment } from 'react-cm-ui';

export default class CommentSample extends React.Component {
    render() {
        return (
            <Comment name="Joe Smith" time={1531648822}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor.
            </Comment>
        );
    }
}`;

const editableCommentSample = `import React from 'react';
import { Banner, Comment } from 'react-cm-ui';

export default class CommentSample extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editableCommentText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            editableComment2Text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            isRemoveBannerOpen: false,
            isSaveBannerOpen: false
        };

        this._onMenuClick = this._onMenuClick.bind(this);
        this._onCloseRemoveBanner = this._onCloseRemoveBanner.bind(this);
        this._onCloseSaveBanner = this._onCloseSaveBanner.bind(this);
        this._onRemoveComment = this._onRemoveComment.bind(this);
        this._onSaveComment = this._onSaveComment.bind(this);
    }

    render() {
        const { editableCommentText, editableComment2Text, isRemoveBannerOpen, isSaveBannerOpen } = this.state;

        return (
            <div>
                <Comment
                    canDelete
                    canEdit
                    detailsPosition="right"
                    isEditable
                    name="Joe Smith"
                    onActionMenuClick={(menuIsOpen) => this._onMenuClick(1, menuIsOpen)}
                    onDelete={() => this._onRemoveComment(1)}
                    onSaveEdit={(updatedCommentText) => this._onSaveComment(1, updatedCommentText)}
                    text={editableCommentText}
                    time={1536941364}
                >
                    {editableCommentText}
                </Comment>

                <Comment
                    canDelete
                    canEdit={false}
                    isEditable
                    name="Jessica Jones"
                    onActionMenuClick={(menuIsOpen) => this._onMenuClick(2, menuIsOpen)}
                    onDelete={() => this._onRemoveComment(2)}
                    time={1536941520}
                >
                    {'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
                </Comment>

                <Comment
                    canDelete
                    canEdit
                    detailsPosition="right"
                    isEditable
                    name="Joe Smith"
                    onActionMenuClick={(menuIsOpen) => this._onMenuClick(3, menuIsOpen)}
                    onDelete={() => this._onRemoveComment(3)}
                    onSaveEdit={(updatedCommentText) => this._onSaveComment(3, updatedCommentText)}
                    text={editableComment2Text}
                    time={1536941640}
                >
                    {editableComment2Text}
                </Comment>

                <Banner
                    id="remove-success"
                    level="success"
                    isOpen={isRemoveBannerOpen}
                    message="Comment Removed!"
                    onClose={this._onCloseRemoveBanner}
                    title="Comment Removed"
                    type="notification"
                />

                <Banner
                    id="save-success"
                    level="success"
                    isOpen={isSaveBannerOpen}
                    message="Comment Saved!"
                    onClose={this._onCloseSaveBanner}
                    title="Comment Saved"
                    type="notification"
                />
            </div>
        );
    }

    _onCloseRemoveBanner() {
        this.setState({ isRemoveBannerOpen: false });
    }

    _onCloseSaveBanner() {
        this.setState({ isSaveBannerOpen: false });
    }

    _onRemoveComment(id) {
        // TODO - Issue API call or whatever to delete the persisted comment data

        this.setState({ isRemoveBannerOpen: true }, () => {
            setTimeout(() => this.setState({ isRemoveBannerOpen: false}), 2000);
        });
    }

    _onSaveComment(id, updatedComment) {
        // TODO - Issue API call or whatever to update the persisted comment data

        const updatedState = { isSaveBannerOpen: true };

        if (id === 1)
            updatedState.editableCommentText = updatedComment;
        else if (id === 3)
            updatedState.editableComment2Text = updatedComment;

        this.setState(updatedState, () => {
            setTimeout(() => this.setState({ isSaveBannerOpen: false }), 2000);
        });
    }

    _onMenuClick(id, menuIsOpen) {
        console.log(\`Action menu for comment \$\{id\} clicked!  Menu open: \$\{menuIsOpen\}\`);
    }
}`;

export default class ElmentsComment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editableCommentText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor.',
            editableComment2Text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            isRemoveBannerOpen: false,
            isSaveBannerOpen: false
        };

        this._onMenuClick = this._onMenuClick.bind(this);
        this._onCloseRemoveBanner = this._onCloseRemoveBanner.bind(this);
        this._onCloseSaveBanner = this._onCloseSaveBanner.bind(this);
        this._onRemoveComment = this._onRemoveComment.bind(this);
        this._onSaveComment = this._onSaveComment.bind(this);
    }

    render() {
        const { editableCommentText, editableComment2Text, isRemoveBannerOpen, isSaveBannerOpen } = this.state;

        const props = [
            {
                name: 'avatarSrc',
                type: 'string',
                default: '',
                description: 'Show the comment author\'s avatar.',
                allowedTypes: ''
            }, {
                name: 'canDelete',
                type: 'bool',
                default: 'false',
                description: 'Whether or not the user is permitted to delete the comment (assuming that isEditable is true and it is editable in the first place).',
                allowedTypes: ''
            }, {
                name: 'canEdit',
                type: 'bool',
                default: 'false',
                description: 'Whether or not the user is permitted to edit and save an update to the comment (assuming that isEditable is true and it is editable in the first place).',
                allowedTypes: ''
            }, {
                name: 'children',
                type: 'node',
                default: '',
                description: 'Primary content.',
                allowedTypes: ''
            }, {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes.',
                allowedTypes: ''
            }, {
                name: 'detailsPosition',
                type: 'enum',
                default: 'left',
                description: 'Position the comment\'s details on either the left or right.',
                allowedTypes: 'left, right'
            }, {
                name: 'isEditable',
                type: 'bool',
                default: 'false',
                description: 'Whether or not the comment is editable.  At all.  If it is editable, but certain users may not have Edit and/or Delete permission, use canEdit and canDelete to govern that.',
                allowedTypes: ''
            }, {
                name: 'name *',
                type: 'string',
                default: '',
                description: 'A required field which displays the user\'s name.',
                allowedTypes: ''
            }, {
                name: 'onActionMenuClick',
                type: 'func',
                default: '',
                description: 'The onActionMenuClick event handler.',
                allowedTypes: ''
            }, {
                name: 'onDelete',
                type: 'func',
                default: '',
                description: 'The onDelete event handler.',
                allowedTypes: ''
            }, {
                name: 'onSaveEdit',
                type: 'func',
                default: '',
                description: 'The onSaveEdit event handler.',
                allowedTypes: ''
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the Comment\'s container. Mainly used for padding and margins.',
                allowedTypes: ''
            }, {
                name: 'text',
                type: 'string',
                default: '',
                description: 'In addition to passing it in as the child, you must pass the text/contents of a comment in here if you want to make it editable.',
                allowedTypes: ''
            }, {
                name: 'time *',
                type: 'number',
                default: '',
                description: 'A required field which displays the time the comment was posted in UTC.',
                allowedTypes: ''
            }
        ];

        return (
            <Main page="headers">
                <TitleBar title="Comment" />

                <Card>
                    <Header size="large">Props</Header>

                    <TableProps props={props} />
                </Card>

                {/* Comment */}
                <Header anchor="comment" size="large" style={{ marginTop: '55px' }} sub={true}>
                    Comment
                    <Header.Subheader>
                        A user's comment.
                    </Header.Subheader>
                </Header>

                <Comment name="Joe Smith" time={1536941364}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor.
                </Comment>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {commentSample}
                </Highlighter>

                {/* Editable Comment */}
                <Header anchor="editable-comment" size="large" style={{ marginTop: '55px' }} sub={true}>
                    Editable Comments
                    <Header.Subheader>
                        A comment can be editable and deletable.
                    </Header.Subheader>
                </Header>

                <p>
                    Use the <code>isEditable</code> prop to set whether or not a comment is editable or deletable
                    <em>at all</em> (versus simply being read-only).  <code>isEditable</code> defaults to false, so set
                    it to true for editable comments.
                </p>

                <p>
                    Likely there will be some business rules around <em>who</em> may edit and delete comments.  For
                    example, let&rsquo;s say the rules are that a comment may only be edited by its original author, but
                    that certain "moderator" users are authorized to delete comments (e.g. comments deemed
                    "inappropriate").  You should use the <code>canDelete</code> and <code>canEdit</code> props to drive
                    these kinds of permissions and selectively make deletion and editing available. The sample below
                    demonstrates this: Let&rsquo;s say that Joe Smith is the logged in user and has moderation
                    privileges. Joe Smith&rsquo;s comments are both editable and deleteable whereas Jessica Jones&rsquo;
                    comment is deletable because Joe is a moderator but not editable because Joe is not the author.
                </p>

                <p>
                    When the comment details are right-aligned, the edit and delete action menu is left-aligned, and
                    vice versa.
                </p>

                <Comment
                    canDelete
                    canEdit
                    detailsPosition="right"
                    isEditable
                    name="Joe Smith"
                    onActionMenuClick={(menuIsOpen) => this._onMenuClick(1, menuIsOpen)}
                    onDelete={() => this._onRemoveComment(1)}
                    onSaveEdit={(updatedCommentText) => this._onSaveComment(1, updatedCommentText)}
                    text={editableCommentText}
                    time={1536941364}
                >
                    {editableCommentText}
                </Comment>

                <Comment
                    canDelete
                    canEdit={false}
                    isEditable
                    name="Jessica Jones"
                    onActionMenuClick={(menuIsOpen) => this._onMenuClick(2, menuIsOpen)}
                    onDelete={() => this._onRemoveComment(2)}
                    time={1536941520}
                >
                    {'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
                </Comment>

                <Comment
                    canDelete
                    canEdit
                    detailsPosition="right"
                    isEditable
                    name="Joe Smith"
                    onActionMenuClick={(menuIsOpen) => this._onMenuClick(3, menuIsOpen)}
                    onDelete={() => this._onRemoveComment(3)}
                    onSaveEdit={(updatedCommentText) => this._onSaveComment(3, updatedCommentText)}
                    text={editableComment2Text}
                    time={1536941640}
                >
                    {editableComment2Text}
                </Comment>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {editableCommentSample}
                </Highlighter>

                <Banner
                    id="remove-success"
                    level="success"
                    isOpen={isRemoveBannerOpen}
                    message="Comment Removed!"
                    onClose={this._onCloseRemoveBanner}
                    title="Comment Removed"
                    type="notification"
                />

                <Banner
                    id="save-success"
                    level="success"
                    isOpen={isSaveBannerOpen}
                    message="Comment Saved!"
                    onClose={this._onCloseSaveBanner}
                    title="Comment Saved"
                    type="notification"
                />
            </Main>
        );
    }

    _onCloseRemoveBanner() {
        this.setState({ isRemoveBannerOpen: false });
    }

    _onCloseSaveBanner() {
        this.setState({ isSaveBannerOpen: false });
    }

    _onRemoveComment(id) {
        this.setState({ isRemoveBannerOpen: true }, () => {
            setTimeout(() => this.setState({ isRemoveBannerOpen: false}), 2000);
        });
    }

    _onSaveComment(id, updatedComment) {
        const updatedState = { isSaveBannerOpen: true };

        if (id === 1)
            updatedState.editableCommentText = updatedComment;
        else if (id === 3)
            updatedState.editableComment2Text = updatedComment;

        this.setState(updatedState, () => {
            setTimeout(() => this.setState({ isSaveBannerOpen: false }), 2000);
        });
    }

    _onMenuClick(id, menuIsOpen) {
        console.log(`Action menu for comment ${id} clicked!  Menu open: ${menuIsOpen}`);
    }
}
