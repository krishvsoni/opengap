import { exportToLangGraphString } from '../adapters/langgraph.js';
import { AgentManifest } from '../utils/loader.js';
import { runPythonModule, type PythonRunOptions } from './python.js';

const INSTALL_HINT =
  'Install dependencies: pip install "langgraph>=0.2" "langchain>=0.3" "langchain-core>=0.3" langchain-anthropic';

export function runWithLangGraph(
  agentDir: string,
  _manifest: AgentManifest,
  options: PythonRunOptions = {},
): void {
  const code = exportToLangGraphString(agentDir);
  runPythonModule(agentDir, code, 'langgraph', INSTALL_HINT, options);
}
