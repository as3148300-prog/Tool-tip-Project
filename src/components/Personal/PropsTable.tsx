interface PropsTableProps {
  data: {
    prop: string;
    type: string;
    default: string;
    description: string;
  }[];
}

const PropsTable = ({ data }: PropsTableProps) => {
  return (
    <div
      className="overflow-hidden rounded-lg shadow-sm"
      style={{
        border: "1px solid var(--border-color)",
        backgroundColor: "var(--card-bg)",
      }}
    >
      <table className="w-full">
        <thead>
          <tr>
            <th
              className="px-4 py-3 text-left text-sm font-semibold"
              style={{ color: "var(--text-color)" }}
            >
              Prop
            </th>

            <th
              className="px-4 py-3 text-left text-sm font-semibold"
              style={{ color: "var(--text-color)" }}
            >
              Type
            </th>

            <th
              className="px-4 py-3 text-left text-sm font-semibold"
              style={{ color: "var(--text-color)" }}
            >
              Default
            </th>

            <th
              className="px-4 py-3 text-left text-sm font-semibold"
              style={{ color: "var(--text-color)" }}
            >
              Description
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, i) => (
            <tr
              key={i}
              className="transition-colors"
              style={{
                borderTop: "1px solid var(--border-color)",
              }}
            >
              <td
                className="px-4 py-3 text-sm font-mono"
                style={{ color: "var(--primary-color)" }}
              >
                {row.prop}
              </td>

              <td
                className="px-4 py-3 text-sm font-mono"
                style={{ color: "var(--muted-text)" }}
              >
                {row.type}
              </td>

              <td
                className="px-4 py-3 text-sm font-mono"
                style={{ color: "var(--muted-text)" }}
              >
                {row.default}
              </td>

              <td
                className="px-4 py-3 text-sm"
                style={{ color: "var(--muted-text)" }}
              >
                {row.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropsTable;