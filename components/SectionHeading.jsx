export function SectionHeading(props) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
        {props.title}
      </h2>
      {props.subtitle ? (
        <p className="mt-2 text-slate-600">{props.subtitle}</p>
      ) : null}
    </div>
  );
}
