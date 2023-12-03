import './App.css';
import { TreeNode } from './model/TreeNode';
import TreeViewer from './components/TreeViewer';

const tree = new TreeNode('Node 1', [
    new TreeNode('Node 2', [new TreeNode('Node 3'), new TreeNode('Node 4')]),
    new TreeNode('Node 5')
]);

function App(): JSX.Element {
    return (
        <div
            style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}
        >
            <TreeViewer tree={tree}></TreeViewer>
        </div>
    );
}

export default App;
