import Button from "ui-library/lib/Button/Button";
import Link from "ui-library/lib/Link/Link";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to t-online</h1>
      <p>
        <Button>I'm a button</Button>
      </p>
      <p>
        <Link>I'm a link</Link>
      </p>
    </div>
  );
}
