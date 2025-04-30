// src/components/QuerySelector.tsx
const options = [
    { slug: "videos_per_category", label: "Videos per Category" },
    { slug: "in_stock_per_category", label: "In-stock per Category" },
    { slug: "categories_per_actor", label: "Categories per Actor" },
    { slug: "actors_multiple_categories", label: "Actors in >1 Category" },
    { slug: "actors_not_comedy", label: "Actors not in Comedy" },
    { slug: "actors_comedy_and_action", label: "Actors in Comedy & Action" },
    { slug: "comedy_stock_by_director", label: "Comedy Stock by Director" },
  ];
  
  export default function QuerySelector({ onRun }) {
    return (
      <div className="flex flex-wrap gap-2">
        {options.map(o => (
          <Button key={o.slug} onClick={() => onRun(o.slug)}>
            {o.label}
          </Button>
        ))}
      </div>
    );
  }
  