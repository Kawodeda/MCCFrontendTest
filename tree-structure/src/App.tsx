import './App.css';
import { TreeNode } from './model/TreeNode';
import Tree from './components/Tree';

const tree = new TreeNode('root', [
    new TreeNode('1-1', [new TreeNode('2-1'), new TreeNode('2-2')]),
    new TreeNode('1-2')
]);

function App(): JSX.Element {
    return (
        <div>
            <Tree model={tree}></Tree>
        </div>
    );
}

export default App;
