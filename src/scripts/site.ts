import { buildEnquiry } from './enquiry';

const form = document.querySelector<HTMLFormElement>('#repair-form')!;
const device = form.querySelector<HTMLSelectElement>('#device')!;
const model = form.querySelector<HTMLInputElement>('#model')!;
const issue = form.querySelector<HTMLTextAreaElement>('#issue')!;
const status = form.querySelector<HTMLElement>('#form-status')!;
const fallback = form.querySelector<HTMLTextAreaElement>('#copy-fallback')!;
const requestInputs = [...form.querySelectorAll<HTMLInputElement>('input[name="request"]')];

function clearCopyStatus() {
  status.textContent = '';
  fallback.hidden = true;
}

function updateRequest() {
  issue.setCustomValidity('');
  const isUpgrade = requestInputs.find(input => input.checked)?.value === 'Upgrade';
  form.querySelector('#issue-label')!.textContent = isUpgrade ? 'What would you like to improve?' : 'What’s going wrong?';
  issue.placeholder = isUpgrade ? 'Tell us what you have in mind and what you want to get from the upgrade.' : 'What happens when you use it? Tell us the symptoms and anything you’ve tried.';
  clearCopyStatus();
}

document.querySelectorAll<HTMLAnchorElement>('[data-enquiry-device]').forEach(link => {
  link.addEventListener('click', () => {
    device.value = link.dataset.enquiryDevice!;
    requestInputs[0].checked = true;
    // Preserve a visitor’s typed description when they explore another service.
    if (!issue.value.trim() || issue.dataset.prefill === issue.value) {
      issue.value = `${link.dataset.enquiryIssue}: `;
      issue.dataset.prefill = issue.value;
    }
    updateRequest();
  });
});
document.querySelector('[data-upgrade]')!.addEventListener('click', () => {
  requestInputs[1].checked = true;
  if (issue.dataset.prefill === issue.value) issue.value = '';
  updateRequest();
});
requestInputs.forEach(input => input.addEventListener('change', updateRequest));
form.addEventListener('input', clearCopyStatus);
form.addEventListener('submit', async event => {
  event.preventDefault();
  if (issue.value.trim().length < 10) {
    issue.setCustomValidity('Please describe the issue in at least 10 characters.');
    issue.reportValidity();
    return;
  }
  const message = buildEnquiry({ device: device.value, model: model.value, issue: issue.value, request: requestInputs.find(input => input.checked)!.value });
  try {
    await navigator.clipboard.writeText(message);
    fallback.hidden = true;
    status.textContent = 'Copied. Paste this message into your conversation with JTLB to arrange the next step.';
  } catch {
    fallback.hidden = false;
    fallback.value = message;
    fallback.focus();
    fallback.select();
    status.textContent = 'Your message is ready below. Select and copy it to send to JTLB.';
  }
});
issue.addEventListener('input', () => issue.setCustomValidity(''));

const tabs = [...document.querySelectorAll<HTMLButtonElement>('[role="tab"]')];
function selectTab(selected: HTMLButtonElement) {
  tabs.forEach(tab => {
    const active = selected === tab;
    tab.setAttribute('aria-selected', String(active));
    tab.tabIndex = active ? 0 : -1;
    document.getElementById(tab.getAttribute('aria-controls')!)!.hidden = !active;
  });
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectTab(tab));
  tab.addEventListener('keydown', event => {
    let next: number;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    else if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = tabs.length - 1;
    else return;
    event.preventDefault();
    selectTab(tabs[next]);
    tabs[next].focus();
  });
});

const marquee = document.querySelector('.marquee')!;
const pause = document.querySelector<HTMLButtonElement>('.marquee-toggle')!;
pause.addEventListener('click', () => {
  const paused = pause.getAttribute('aria-pressed') !== 'true';
  pause.setAttribute('aria-pressed', String(paused));
  pause.setAttribute('aria-label', paused ? 'Resume brand scrolling' : 'Pause brand scrolling');
  marquee.classList.toggle('is-paused', paused);
});
document.querySelectorAll('.mobile-navigation a').forEach(link => {
  link.addEventListener('click', () => { document.querySelector<HTMLDetailsElement>('.mobile-navigation')!.open = false; });
});
