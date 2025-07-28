const projects = [
    {
        title: "Taskify",
        description: "Görev yönetimi için kullanıcı girişi ve rollerle çalışan sistem.",
        github: "https://github.com/omerturantr/taskify",
        demo: "https://taskify.wuaze.com",
    },
    {
        title: "Finger Counter App",
        description: "OpenCV ile parmak sayısını algılayan Python uygulaması.",
        github: "https://github.com/omerturantr/finger-counter",
        demo: "",
    },
    // Yeni projeleri buraya ekleyebilirsin
];

export default function ProjectsPage() {
    return (
        <main className="max-w-5xl mx-auto px-6 py-16">
            <h1 className="text-4xl font-bold mb-10 text-blue-600">Projelerim</h1>
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <div key={project.title} className="p-6 border rounded-lg shadow hover:shadow-lg transition">
                        <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                        <div className="flex gap-4">
                            <a
                                href={project.github}
                                target="_blank"
                                className="text-sm text-blue-600 underline hover:text-blue-800"
                            >
                                GitHub
                            </a>
                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    className="text-sm text-green-600 underline hover:text-green-800"
                                >
                                    Canlı Demo
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
