// A decoy form field. No human ever fills it in, because no human can see it;
// automated submitters that fill every input they find give themselves away,
// and the worker then accepts the request without sending anything.
//
// Accessibility and correctness notes (please keep these if you restyle it):
//   - aria-hidden plus tabIndex={-1} keep it out of the accessibility tree and
//     off the keyboard tab order, so a screen-reader or keyboard user never
//     meets a field they cannot understand.
//   - It is positioned off-screen rather than display:none or hidden, because
//     some automated clients skip fields that are hidden the obvious ways.
//   - autoComplete="off" stops a password manager helpfully filling it and
//     making a real customer look like a bot.
//
// The field name is deliberately plausible ("contactPreference") rather than
// something like "honeypot" - the point is that it does not announce itself.
// The worker's looksAutomated() reads this exact name; change both together.

interface HoneypotFieldProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const HoneypotField: React.FC<HoneypotFieldProps> = ({ value, onChange }) => (
  <div aria-hidden="true" className="absolute left-[-9999px] top-auto w-px h-px overflow-hidden">
    <label htmlFor="contactPreference">Preferred contact method (leave blank)</label>
    <input
      type="text"
      id="contactPreference"
      name="contactPreference"
      value={value}
      onChange={onChange}
      tabIndex={-1}
      autoComplete="off"
    />
  </div>
);

export default HoneypotField;
