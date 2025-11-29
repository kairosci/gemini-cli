/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { Theme } from './theme.js';
import type { ColorsTheme } from './theme.js';

export const vsCodeDarkColors: ColorsTheme = {
  type: 'dark',
  Background: '#1E1E1E',
  Foreground: '#D4D4D4',
  LightBlue: '#9CDCFE',
  AccentBlue: '#569CD6',
  AccentPurple: '#C586C0',
  AccentCyan: '#4EC9B0',
  AccentGreen: '#B5CEA8',
  AccentYellow: '#DCDCAA',
  AccentRed: '#F48771', // Error red
  DiffAdded: '#373D29', // Subtle green for diff added
  DiffRemoved: '#4B1818', // Subtle red for diff removed
  Comment: '#6A9955',
  Gray: '#808080',
  DarkGray: '#303030',
  GradientColors: ['#007ACC', '#569CD6', '#9CDCFE'], // Blueish gradient
};

export const VSCodeDark: Theme = new Theme(
  'VSCodeDark',
  'dark',
  {
    hljs: {
      display: 'block',
      overflowX: 'auto',
      padding: '0.5em',
      background: vsCodeDarkColors.Background,
      color: vsCodeDarkColors.Foreground,
    },
    'hljs-keyword': {
      color: vsCodeDarkColors.AccentBlue, // #569CD6
    },
    'hljs-literal': {
      color: vsCodeDarkColors.AccentBlue,
    },
    'hljs-symbol': {
      color: vsCodeDarkColors.AccentBlue,
    },
    'hljs-name': {
      color: vsCodeDarkColors.AccentBlue,
    },
    'hljs-link': {
      color: vsCodeDarkColors.AccentBlue,
      textDecoration: 'underline',
    },
    'hljs-built_in': {
      color: vsCodeDarkColors.AccentCyan, // #4EC9B0
    },
    'hljs-type': {
      color: vsCodeDarkColors.AccentCyan, // #4EC9B0
    },
    'hljs-number': {
      color: vsCodeDarkColors.AccentGreen, // #B5CEA8
    },
    'hljs-class': {
      color: vsCodeDarkColors.AccentCyan,
    },
    'hljs-string': {
      color: '#CE9178', // Specific string color for VS Code
    },
    'hljs-meta-string': {
      color: '#CE9178',
    },
    'hljs-regexp': {
      color: '#D16969', // Regex color
    },
    'hljs-template-tag': {
      color: vsCodeDarkColors.AccentPurple,
    },
    'hljs-subst': {
      color: vsCodeDarkColors.Foreground,
    },
    'hljs-function': {
      color: vsCodeDarkColors.AccentYellow, // #DCDCAA
    },
    'hljs-title': {
      color: vsCodeDarkColors.AccentYellow,
    },
    'hljs-params': {
      color: vsCodeDarkColors.Foreground,
    },
    'hljs-formula': {
      color: vsCodeDarkColors.Foreground,
    },
    'hljs-comment': {
      color: vsCodeDarkColors.Comment, // #6A9955
      fontStyle: 'italic',
    },
    'hljs-quote': {
      color: vsCodeDarkColors.Comment,
      fontStyle: 'italic',
    },
    'hljs-doctag': {
      color: vsCodeDarkColors.Comment,
    },
    'hljs-meta': {
      color: vsCodeDarkColors.AccentPurple, // Preprocessor/meta usually purple/blue
    },
    'hljs-meta-keyword': {
      color: vsCodeDarkColors.AccentPurple,
    },
    'hljs-tag': {
      color: vsCodeDarkColors.AccentBlue,
    },
    'hljs-variable': {
      color: vsCodeDarkColors.LightBlue, // #9CDCFE
    },
    'hljs-template-variable': {
      color: vsCodeDarkColors.LightBlue,
    },
    'hljs-attr': {
      color: vsCodeDarkColors.LightBlue,
    },
    'hljs-attribute': {
      color: vsCodeDarkColors.LightBlue,
    },
    'hljs-property': {
      color: vsCodeDarkColors.LightBlue,
    },
    'hljs-builtin-name': {
      color: vsCodeDarkColors.AccentCyan,
    },
    'hljs-section': {
      color: vsCodeDarkColors.AccentYellow,
    },
    'hljs-emphasis': {
      fontStyle: 'italic',
    },
    'hljs-strong': {
      fontWeight: 'bold',
    },
    'hljs-bullet': {
      color: vsCodeDarkColors.AccentBlue,
    },
    'hljs-selector-tag': {
      color: '#D7BA7D', // CSS selector tag
    },
    'hljs-selector-id': {
      color: '#D7BA7D',
    },
    'hljs-selector-class': {
      color: '#D7BA7D',
    },
    'hljs-selector-attr': {
      color: '#D7BA7D',
    },
    'hljs-selector-pseudo': {
      color: '#D7BA7D',
    },
    'hljs-addition': {
      color: vsCodeDarkColors.AccentGreen,
      display: 'inline-block',
      width: '100%',
    },
    'hljs-deletion': {
      color: vsCodeDarkColors.AccentRed,
      display: 'inline-block',
      width: '100%',
    },
  },
  vsCodeDarkColors,
);
