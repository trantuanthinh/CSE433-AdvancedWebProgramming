export default function Banner() {
    return (
        <>
            <div className="flex flex-row px-40 justify-between items-center">
                <img src="/logo.png" alt="Logo" />
                <input type="text" className="h-10 px-4 rounded-md border-2" placeholder="Tìm kiếm..." />
                <div className="grid grid-cols-2 grid-rows-2 gap-4">
                    <div className="row-span-2 flex justify-center items-center">
                        <button className="bg-red-500 rounded-md h-10">mua</button>
                    </div>
                    <div>3 sản phẩm</div>
                    <div className="col-start-2 row-start-2 text-red-600">1,289,000đ</div>
                </div>
            </div>
        </>
    );
}
