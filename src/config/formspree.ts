export const FORMSPREE_FORM_ID = 'xvkpqdag';

export const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_FORM_ID}`;

/**
 * Submit a form element to Formspree. Adds a hidden `form_name` value so
 * submissions are labeled by page. Returns true on success.
 */
export async function submitToFormspree(form: HTMLFormElement, formName: string): Promise<boolean> {
  const data = new FormData(form);
  data.set('form_name', formName);
  const res = await fetch(FORMSPREE_ENDPOINT, {
    method: 'POST',
    headers: { Accept: 'application/json' },
    body: data,
  });
  return res.ok;
}
