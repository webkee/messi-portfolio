'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

const skills = [
  { name: '드리블', level: 98 },
  { name: '슈팅', level: 95 },
  { name: '패스', level: 97 },
  { name: '플레이메이킹', level: 96 },
  { name: '프리킥', level: 94 },
  { name: '리더십', level: 92 },
];

export default function AboutSection() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section id="about" ref={ref} className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 프로필 이미지 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
              <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-8xl">⚽</span>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 mx-auto flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors shadow-lg"
            >
              <FiDownload className="w-5 h-5" />
              경력 다운로드
            </motion.button>
          </motion.div>

          {/* 소개 및 스킬 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              리오넬 안드레스 메시 쿠치티니(Lionel Andrés Messi Cuccittini)는 아르헨티나의 축구선수로,
              현재 메이저 리그 사커(MLS)의 인터 마이애미 CF에서 활약하고 있습니다.
              세계 축구 역사상 가장 위대한 선수 중 한 명으로 평가받고 있습니다.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              8회 발롱도르 수상, 2022 카타르 월드컵 우승, UEFA 챔피언스리그 4회 우승 등
              수많은 개인 및 팀 트로피를 보유하고 있으며, FC 바르셀로나의 최다 득점자이자
              아르헨티나 국가대표팀의 최다 득점자이기도 합니다.
            </p>

            <div className="mt-8 space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Skills
              </h3>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.8 + index * 0.1, ease: 'easeOut' }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

