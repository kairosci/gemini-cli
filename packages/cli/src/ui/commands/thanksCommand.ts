/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommandKind, type SlashCommand } from './types.js';
import {
  logUserPositiveFeedback,
  UserPositiveFeedbackEvent,
} from '@google/gemini-cli-core';

export const thanksCommand: SlashCommand = {
  name: 'thanks',
  description: 'Express gratitude without consuming tokens.',
  kind: CommandKind.BUILT_IN,
  hidden: true, // Hide from /help list
  action: async (context, _args) => {
    context.ui.addItem(
      {
        type: 'info',
        text: 'Feedback received. Thank you!',
      },
      Date.now(),
    );

    // Log positive feedback telemetry
    if (context.session.lastGeminiResponsePromptId) {
      // Ensure context.services.config is not null before passing
      if (context.services.config) {
        logUserPositiveFeedback(
          context.services.config,
          new UserPositiveFeedbackEvent(
            context.session.lastGeminiResponsePromptId,
          ),
        );
      }
    }
    return; // Indicate that the command was handled and no further action is needed by returning void
  },
};
