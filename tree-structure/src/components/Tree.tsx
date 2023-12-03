import { useState } from 'react';
import { TreeNode } from '../model/TreeNode';

function Tree({ model }: { model: TreeNode<string> }): JSX.Element {
    const children = model.children.map((node) => <Tree model={node}></Tree>);
    const [expanded, setExpanded] = useState(false);
    const onClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <div onClick={onClick}>
                {expandedChar(model, expanded)}
                <span>&nbsp;{model.value}</span>
            </div>
            {expanded && (
                <div
                    style={{
                        padding: '0 0 0 1em',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    {children}
                </div>
            )}
        </>
    );
}

function expandedChar<T>(node: TreeNode<T>, isExpanded: boolean): JSX.Element {
    if (node.children.length === 0) {
        return <span style={{ visibility: 'hidden' }}>&#11208;</span>;
    }

    return isExpanded ? <span>&#11206;</span> : <span>&#11208;</span>;
}

export default Tree;
