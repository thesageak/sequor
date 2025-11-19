interface DisplayProps {
    title: string;
    image_url: string;
}

export default function DisplayCard(props : DisplayProps) {
    return(
        <div className="m-3">
            <div className="flex flex-col w-44 h-69 rounded-lg overflow-hidden">
                <img
                    src={props.image_url}
                    alt={`Key art for ${props.title}`}
                    className="w-full h-full object-fill"
                />
            </div>
            <p className="w-44 text-[1.2rem] text-center truncate">
                {props.title}
            </p>
        </div>
    )
}