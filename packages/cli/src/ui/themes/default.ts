/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { darkTheme, Theme } from './theme.js';

export const DefaultDark: Theme = new Theme(
  'Default',
  'dark',
  {
    hljs: {
      display: 'block',
      overflowX: 'auto',
      padding: '0.5em',
      background: darkTheme.Background,
      color: darkTheme.Foreground,
    },
    'hljs-keyword': {
      color: darkTheme.AccentPurple, // Keywords like 'function', 'const', 'import'
    },
    'hljs-built_in': {
      color: darkTheme.AccentCyan, // Built-in functions/types like 'console', 'Array'
    },
    'hljs-type': {
      color: darkTheme.AccentCyan, // Types like 'string', 'number', 'boolean'
    },
    'hljs-literal': {
      color: darkTheme.AccentBlue, // Boolean, null, undefined
    },
    'hljs-number': {
      color: darkTheme.AccentGreen, // Numbers
    },
    'hljs-string': {
      color: darkTheme.AccentYellow, // Strings
    },
    'hljs-regexp': {
      color: darkTheme.AccentRed, // Regular expressions
    },
    'hljs-variable': {
      color: darkTheme.LightBlue, // Variables
    },
    'hljs-template-variable': {
      color: darkTheme.LightBlue,
    },
    'hljs-attr': {
      color: darkTheme.LightBlue, // Object properties, HTML attributes
    },
    'hljs-attribute': {
      color: darkTheme.LightBlue,
    },
    'hljs-property': {
      color: darkTheme.LightBlue,
    },
    'hljs-meta': {
      color: darkTheme.AccentBlue, // Preprocessor directives, annotations
    },
    'hljs-meta-keyword': {
      color: darkTheme.AccentBlue,
    },
    'hljs-tag': {
      color: darkTheme.AccentBlue, // HTML/XML tags
    },
    'hljs-name': {
      color: darkTheme.AccentBlue, // Function/class names
    },
    'hljs-selector-tag': {
      color: darkTheme.AccentBlue, // CSS selector tags
    },
    'hljs-function': {
      color: darkTheme.AccentGreen, // Function declarations
    },
    'hljs-title': {
      color: darkTheme.AccentGreen, // Class/function titles
    },
    'hljs-class': {
      color: darkTheme.AccentGreen, // Class declarations
    },
    'hljs-comment': {
      color: darkTheme.Comment, // Comments
      fontStyle: 'italic',
    },
    'hljs-quote': {
      color: darkTheme.Comment, // Block quotes
      fontStyle: 'italic',
    },
    'hljs-doctag': {
      color: darkTheme.Comment, // Javadoc/docblock tags
    },
    'hljs-link': {
      color: darkTheme.AccentBlue,
      textDecoration: 'underline',
    },
    'hljs-subst': {
      color: darkTheme.Foreground, // Interpolated code in template strings
    },
    'hljs-params': {
      color: darkTheme.Foreground, // Function parameters
    },
    'hljs-formula': {
      color: darkTheme.Foreground,
    },
    'hljs-section': {
      color: darkTheme.AccentYellow, // Markdown sections
    },
    'hljs-emphasis': {
      fontStyle: 'italic',
    },
    'hljs-strong': {
      fontWeight: 'bold',
    },
    'hljs-bullet': {
      color: darkTheme.AccentYellow, // List bullets
    },
    'hljs-selector-id': {
      color: darkTheme.AccentRed, // CSS IDs
    },
    'hljs-selector-class': {
      color: darkTheme.AccentYellow, // CSS classes
    },
    'hljs-selector-attr': {
      color: darkTheme.AccentYellow, // CSS attributes
    },
    'hljs-selector-pseudo': {
      color: darkTheme.AccentYellow, // CSS pseudo-classes
    },
    'hljs-template-tag': {
      color: darkTheme.AccentBlue,
    },
    'hljs-addition': {
      color: darkTheme.AccentGreen,
      display: 'inline-block',
      width: '100%',
    },
    'hljs-deletion': {
      color: darkTheme.AccentRed,
      display: 'inline-block',
      width: '100%',
    },
  },
  darkTheme,
);
