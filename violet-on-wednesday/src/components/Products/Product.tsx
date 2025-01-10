export default function Product() {
    return (
        <>
            <div className="flex flex-col">
                <img className="size-52" src="/demoImage.jpg" alt="" />
                <p>Khai trương hồng phát 2</p>
                <p className="font-bold text-[#662d91]">VS035</p>
                <p className="font-bold text-md text-gray-500 line-through">890,000đ</p>
                <p className="font-bold text-xl text-[#e83b29]">807,500đ</p>
            </div>
        </>
    );
}