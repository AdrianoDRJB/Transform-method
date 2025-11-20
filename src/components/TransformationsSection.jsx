import React from 'react';
import { Card, CardContent } from './ui/card';
import { Award, TrendingUp } from 'lucide-react';

const TransformationsSection = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Real Science, Real Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Evidence-based approach backed by education and proven through real-world transformations
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-8">
            <Award className="w-6 h-6 text-blue-600 mr-2" />
            <h3 className="text-2xl font-bold text-gray-900">Education & Certifications</h3>
          </div>
          
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Academic Background</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span><strong>Nutrition Student</strong> - 3rd Year University</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span><strong>Precision Nutrition Level 1</strong> Certified Coach</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span><strong>Change Psychology Specialist</strong> - Advanced Certificate</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span><strong>Metabolism & Nutrition</strong> Specialist</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span><strong>Plant-Based Nutrition</strong> Coach Certified</span>
                    </li>
                  </ul>
                </div>
                <div className="flex justify-center">
                  <img 
                    src="/certifications/pn-badge.png" 
                    alt="Precision Nutrition Certification Badge" 
                    className="w-48 h-48 object-contain"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Transformations */}
        <div>
          <div className="flex items-center justify-center mb-8">
            <TrendingUp className="w-6 h-6 text-purple-600 mr-2" />
            <h3 className="text-2xl font-bold text-gray-900">Proven Transformations</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Adriano's Transformation */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src="/transformations/adriano-transformation.jpg" 
                  alt="Adriano's transformation journey" 
                  className="w-full h-auto object-cover"
                />
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">My Journey</h4>
                  <p className="text-gray-600">
                    From 30 years old, hungover, and struggling to tie my shoes to 3 years sober, 
                    competing at national CrossFit level. Science-based transformation works.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Cousin's Transformation */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src="/transformations/cousin-transformation.jpg" 
                  alt="Client transformation success story" 
                  className="w-full h-auto object-cover"
                />
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Client Success</h4>
                  <p className="text-gray-600">
                    30+ kg lost through sustainable habits and environment design. 
                    No extreme diets, just science-based systems that work.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransformationsSection;
