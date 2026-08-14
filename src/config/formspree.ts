/**
 * Formspree configuration
 * ------------------------
 * All contact / admissions / employer forms on the site submit here.
 *
 * SETUP (one time):
 *   1. Sign in at https://formspree.io and create a new form
 *      (name it something like "Acumen Website").
 *   2. Formspree gives you an endpoint that looks like:
 *        https://formspree.io/f/abcdwxyz
 *      The part after /f/ (e.g. "abcdwxyz") is your form ID.
 *   3. Paste that ID between the quotes below and save.
 *
 * That's it - every form on the site will start delivering
 * submissions to your Formspree inbox. Each submission includes a
 * hidden "form_name" field so you can tell which page it came from.
 */
export const FORMSPREE_FORM_ID = 'xvkpqdag';

export const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_FORM_ID}`;

/** True until a real Formspree ID has been filled in above. */
export const FORMSPREE_CONFIGURED = FORMSPREE_FORM_ID !== 'YOUR_FORM_ID';

/**
 * Submit a form element to Formspree.
 * Adds a hidden `form_name` value so submissions are labeled by page.
 * Returns true on success.
 */
export async function submitToFormspree(
  form: HTMLFormElement,
  formName: string,
): Promise<boolean> {
  const data = new FormData(form);
  data.set('form_name', formName);
  const res = await fetch(FORMSPREE_ENDPOINT, {
    method: 'POST',
    headers: { Accept: 'application/json' },
    body: data,
  });
  return res.ok;
}
