import './Tree.css';
import { useState } from 'react';
import { TreeNode } from '../model/TreeNode';

export interface TreeProps {
    model: TreeNode<string>;
}

function Tree({ model }: TreeProps): JSX.Element {
    const [expanded, setExpanded] = useState(false);
    const onClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div>
            <div onClick={onClick}>
                {expandedChar(model, expanded)}
                <span>&nbsp;{model.value}</span>
            </div>
            {expanded && (
                <div className="children-container">{nodeChildren(model)}</div>
            )}
        </div>
    );
}

function nodeChildren(node: TreeNode<string>): JSX.Element {
    return (
        <>
            {node.children.map((node) => (
                <Tree model={node}></Tree>
            ))}
        </>
    );
}

function expandedChar<T>(node: TreeNode<T>, isExpanded: boolean): JSX.Element {
    if (node.children.length === 0) {
        return <span className="invisible">&#11208;</span>;
    }

    return isExpanded ? <span>&#11206;</span> : <span>&#11208;</span>;
}

export default Tree;
