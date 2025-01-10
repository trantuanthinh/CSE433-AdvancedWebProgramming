import Product from "./Product";

export default function ProductSection() {
    return (
        <div className="grid grid-cols-4 grid-rows-1 gap-4">
            {Array.from({length: 5}).map((_, i) => (
                <Product key={i} />
            ))}
        </div>
    );
}
