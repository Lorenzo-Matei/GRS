import React, { useState } from "react";

import { RiKnifeFill } from "react-icons/ri";
import './tree-menu.styles.scss';

const TreeMenu = ({data = []}) => {
    return (
        <div className="d-tree">
            <ul className="d-flex d-tree-container flex-column">
                {data.map((tree) => (
                    <TreeNode node={tree} />
                ))}
            </ul>

        </div>

    )

}


const TreeNode = ({ node }) => {
    const [childVisible, setChildVisibility] = useState(false);
    
    const hasChild = node.children ? true : false;

    return (
        <li className="d-tree-node border-0" >
            <div className="d-flex" onClick={(e) => setChildVisibility ((v) => !v)}>
                {hasChild && (
                    <div className={`d-inline d-tree-toggler ${
                        childVisible ? "active" : ""
                        }`}
                    >
                        <RiKnifeFill/>
                    </div>
                )}

                <div className="col d-tree-head">
                    <i className={'mr-1 $(node.icon}'}/> 
                    {node.label}
                </div>
            </div>

            {hasChild && childVisible && (
                <div className='d-tree-content'>
                    <ul className='d-flex d-tree-container flex-column'>
                        <TreeMenu data={node.children}/>
                    </ul>
                </div>
            )}
        </li>

    );

};


export default TreeMenu;