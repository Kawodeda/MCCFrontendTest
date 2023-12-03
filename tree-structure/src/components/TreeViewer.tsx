import './TreeViewer.css';
import { TreeNode } from '../model/TreeNode';
import Tree from './Tree';

export interface TreeViewerProps {
    tree: TreeNode<string>;
}

function TreeViewer({ tree }: TreeViewerProps): JSX.Element {
    return (
        <div className="tree-viewer">
            <div className="container" style={{ borderBottom: 'none' }}>
                <span>Tree</span>
            </div>
            <div className="container">
                <Tree model={tree}></Tree>
            </div>
            <div className="container toolbar">
                <button>Add</button>
                <button>Remove</button>
                <button>Edit</button>
                <button>Reset</button>
            </div>
        </div>
    );
}

export default TreeViewer;
