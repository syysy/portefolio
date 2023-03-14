import React from "react";

type PersonnalProps = {
    setSelected : (index: number) => void;
}

export const Personnal : React.FC<PersonnalProps> = (props) => {
    return (
        <div className="py-2 px-4 cursor-pointer shadow-md hover:shadow-lg "
             style={{ backgroundColor: "#77b5fe"}}
             onClick={() => props.setSelected(-1)}
        >
            <h3 className="text-black">Personnal</h3>
        </div>
    );
}