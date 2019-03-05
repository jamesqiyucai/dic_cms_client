import {InjectionToken} from '@angular/core';
import {StoryComp} from './story-comp.class';

export const STORY_FACTORY = new InjectionToken<StoryComp>('StoryCompFactory');
