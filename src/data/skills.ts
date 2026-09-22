// `icon` is a simple-icons slug (https://simpleicons.org). Use null, or a slug that
// does not exist, to show a two-letter monogram instead.
export interface Skill { name: string; icon: string | null }
export interface SkillGroup { category: string; items: Skill[] }

export const skills: SkillGroup[] = [
  {
    category: 'Languages',
    items: [
      { name: 'Python', icon: 'python' },
      { name: 'C++', icon: 'cplusplus' },
      { name: 'SQL', icon: 'mysql' },
      { name: 'Java', icon: 'openjdk' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'HTML/CSS', icon: 'html5' },
      { name: 'PHP', icon: 'php' },
      { name: 'C#', icon: null },
    ],
  },
  {
    category: 'ML & AI',
    items: [
      { name: 'TensorFlow', icon: 'tensorflow' },
      { name: 'Keras', icon: 'keras' },
      { name: 'PyTorch', icon: 'pytorch' },
      { name: 'scikit-learn', icon: 'scikitlearn' },
      { name: 'XGBoost', icon: null },
      { name: 'SHAP', icon: null },
      { name: 'OpenAI', icon: null },
      { name: 'LangChain', icon: 'langchain' },
    ],
  },
  {
    category: 'Frameworks & Data',
    items: [
      { name: 'React', icon: 'react' },
      { name: 'Node.js', icon: 'nodedotjs' },
      { name: 'Flask', icon: 'flask' },
      { name: 'Streamlit', icon: 'streamlit' },
      { name: 'pandas', icon: 'pandas' },
      { name: 'NumPy', icon: 'numpy' },
      { name: 'Matplotlib', icon: null },
    ],
  },
  {
    category: 'Databases & Tools',
    items: [
      { name: 'MySQL', icon: 'mysql' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'SQLite', icon: 'sqlite' },
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'VS Code', icon: null },
      { name: 'Figma', icon: 'figma' },
      { name: 'LaTeX', icon: 'latex' },
    ],
  },
];
