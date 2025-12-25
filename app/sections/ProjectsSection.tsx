'use client';

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';

type ProjectCategory = 'All' | '트로피' | '경기' | '기록';

interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  description: string;
  image: string;
  github?: string;
  demo?: string;
  images: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: '2022 카타르 월드컵 우승',
    category: '트로피',
    description: '아르헨티나 국가대표팀의 주장으로 2022 카타르 월드컵에서 우승을 달성했습니다. 결승전에서 2골을 기록하며 팀의 3번째 월드컵 우승을 이끌었습니다.',
    image: '🏆',
    demo: 'https://www.fifa.com',
    images: ['🏆', '⚽'],
  },
  {
    id: 2,
    title: '발롱도르 8회 수상',
    category: '기록',
    description: '역대 최다인 8회 발롱도르 수상 기록을 보유하고 있습니다. 2009년부터 2012년까지 4년 연속 수상, 2015년, 2019년, 2021년, 2023년 수상.',
    image: '🥇',
    demo: 'https://www.francefootball.fr',
    images: ['🥇'],
  },
  {
    id: 3,
    title: 'UEFA 챔피언스리그 4회 우승',
    category: '트로피',
    description: 'FC 바르셀로나 소속으로 UEFA 챔피언스리그 4회 우승을 달성했습니다. (2006, 2009, 2011, 2015)',
    image: '🏆',
    demo: 'https://www.uefa.com',
    images: ['🏆', '⚽'],
  },
  {
    id: 4,
    title: '바르셀로나 최다 득점자',
    category: '기록',
    description: 'FC 바르셀로나에서 공식 경기 672골을 기록하여 클럽 최다 득점자 기록을 보유하고 있습니다.',
    image: '⚽',
    demo: 'https://www.fcbarcelona.com',
    images: ['⚽'],
  },
  {
    id: 5,
    title: '엘 클라시코 해트트릭',
    category: '경기',
    description: '2014년 엘 클라시코에서 해트트릭을 기록하며 레알 마드리드를 상대로 4-3 승리를 이끌었습니다.',
    image: '⚽',
    demo: 'https://www.youtube.com',
    images: ['⚽', '🏆'],
  },
  {
    id: 6,
    title: '코파 아메리카 우승',
    category: '트로피',
    description: '2021년 코파 아메리카에서 우승하며 아르헨티나의 28년 만의 메이저 대회 우승을 이끌었습니다.',
    image: '🏆',
    demo: 'https://www.copaamerica.com',
    images: ['🏆'],
  },
];

const categories: ProjectCategory[] = ['All', '트로피', '경기', '기록'];

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  return (
    <>
      <section id="projects" ref={ref} className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Projects
            </h2>
            <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          </motion.div>

          {/* 카테고리 필터 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* 프로젝트 그리드 */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="group relative bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-6xl">
                      {project.image}
                    </div>
                    {/* 호버 오버레이 */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <button
                        onClick={() => openModal(project)}
                        className="px-4 py-2 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                      >
                        상세보기
                      </button>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors"
                        >
                          <FiGithub className="w-5 h-5" />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors"
                        >
                          <FiExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 프로젝트 상세 모달 */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              >
                {/* 모달 헤더 */}
                <div className="sticky top-0 bg-white dark:bg-gray-800 p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedProject.title}
                  </h3>
                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                  >
                    <FiX className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                  </button>
                </div>

                {/* 이미지 캐러셀 */}
                {selectedProject.images.length > 0 && (
                  <div className="relative">
                    <div className="w-full h-96 bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 flex items-center justify-center">
                      <span className="text-9xl">
                        {selectedProject.images[currentImageIndex]}
                      </span>
                    </div>
                    {selectedProject.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 dark:bg-gray-800/80 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors"
                        >
                          ←
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 dark:bg-gray-800/80 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors"
                        >
                          →
                        </button>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                          {selectedProject.images.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`w-2 h-2 rounded-full ${
                                index === currentImageIndex
                                  ? 'bg-blue-600'
                                  : 'bg-white/50'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                )}

                {/* 모달 내용 */}
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {selectedProject.description}
                  </p>
                  <div className="flex gap-4">
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                      >
                        <FiGithub className="w-5 h-5" />
                        GitHub
                      </a>
                    )}
                    {selectedProject.demo && (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <FiExternalLink className="w-5 h-5" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

