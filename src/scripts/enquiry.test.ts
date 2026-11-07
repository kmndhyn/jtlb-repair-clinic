import assert from 'node:assert/strict';
import { buildEnquiry } from './enquiry.ts';

assert.equal(buildEnquiry({device:'Controller',model:' DualSense ',issue:' Left stick drifts. ',request:'Repair'}), "Hi JTLB! I'd like to enquire about a repair.\nDevice: Controller (DualSense)\nIssue: Left stick drifts.");
assert.equal(buildEnquiry({device:'Handheld / retro',model:' ',issue:'I would like a new shell.',request:'Upgrade'}), "Hi JTLB! I'd like to enquire about an upgrade.\nDevice: Handheld / retro\nUpgrade request: I would like a new shell.");
console.log('Repair and upgrade enquiry checks passed.');
