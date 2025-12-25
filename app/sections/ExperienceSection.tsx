'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    title: 'Forward',
    company: '인터 마이애미 CF (MLS)',
    period: '2023 - Present',
    description: '메이저 리그 사커로 이적하여 팀의 핵심 공격수로 활약 중입니다. 리그컵 우승을 이끌었습니다.',
  },
  {
    id: 2,
    title: 'Forward',
    company: '파리 생제르맹 (Ligue 1)',
    period: '2021 - 2023',
    description: '프랑스 리그 1에서 활약하며 리그 우승 2회를 달성했습니다. UEFA 챔피언스리그에서도 활약했습니다.',
  },
  {
    id: 3,
    title: 'Forward',
    company: 'FC 바르셀로나 (La Liga)',
    period: '2004 - 2021',
    description: '17년간 바르셀로나에서 활약하며 라리가 10회 우승, 챔피언스리그 4회 우승, 코파 델 레이 7회 우승 등 수많은 트로피를 획득했습니다. 바르셀로나 최다 득점자 기록을 보유하고 있습니다.',
  },
  {
    id: 4,
    title: 'Forward',
    company: '아르헨티나 국가대표팀',
    period: '2005 - Present',
    description: '2022 카타르 월드컵 우승, 코파 아메리카 우승, 올림픽 금메달 등 국가대표팀의 최다 득점자이자 주장으로 활약 중입니다.',
  },
];

export default function ExperienceSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="experience" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* 데스크톱 타임라인 */}
          <div className="hidden md:block relative">
            {/* 타임라인 라인 */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative mb-12 pl-24"
              >
                {/* 타임라인 포인트 */}
                <div className="absolute left-6 top-2 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-900"></div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                    {exp.company}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 모바일 레이아웃 */}
          <div className="md:hidden space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
              >
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">
                    {exp.company}
                  </p>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

