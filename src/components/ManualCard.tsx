const ManualCard = ({index,content}:{index:number,content:string}) =>{


    return <div className="flex w-full h-max gap-4">
        <div className="w-6 h-6 p-2 mb-8 flex items-center justify-center bg-[#ED653F] rounded-md text-white translate-y-1">{index}</div>
        <p className="w-fit text-2xl">{content}</p>
    </div>
}

export default ManualCard;