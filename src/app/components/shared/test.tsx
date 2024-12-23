import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import Image from "next/image"

const projects = [
  {
    title: "Project 1",
    description: "A brief description of Project 1",
    image: "/placeholder.svg?height=200&width=300",
    link: "#"
  },
  {
    title: "Project 2",
    description: "A brief description of Project 2",
    image: "/placeholder.svg?height=200&width=300",
    link: "#"
  },
 
]

export default function Projects() {
  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700">
              
              <CardContent>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="text-gray-300 mt-2">{project.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <button asChild>
                  <a href={project.link}>View Project</a>
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

