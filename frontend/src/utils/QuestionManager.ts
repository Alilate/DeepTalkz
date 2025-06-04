// src/utils/QuestionManager.ts
import { getRandomQuestion, type QuestionData, type QuestionRequest } from '../api/QuestionBankAPI'

export class QuestionManager {
  private currentQuestion: QuestionData | null = null
  private usedQuestionIds: string[] = []

  // ��ȡ�µ������Ŀ
  async loadNewQuestion(difficulty?: 'beginner' | 'intermediate' | 'advanced'): Promise<QuestionData | null> {
    try {
      const request: QuestionRequest = {
        excludeIds: this.usedQuestionIds
      }

      if (difficulty) {
        request.difficulty = difficulty
      }

      const response = await getRandomQuestion(request)
      
      if (response.success && response.data) {
        this.currentQuestion = response.data
        this.usedQuestionIds.push(response.data.id)
        
        // ������ʷ��¼������������������
        if (this.usedQuestionIds.length > 50) {
          this.usedQuestionIds = this.usedQuestionIds.slice(-25)
        }
        
        return response.data
      }

      return null
    } catch (error) {
      console.error('��������Ŀʧ��:', error)
      return null
    }
  }

  // �����Ѷȼ���ӳ���ȡ��Ŀ
  async loadQuestionByLevel(difficultyLevel: '����' | '�м�' | '�߼�'): Promise<QuestionData | null> {
    const difficultyMap = {
      '����': 'beginner' as const,
      '�м�': 'intermediate' as const,
      '�߼�': 'advanced' as const
    }

    const difficulty = difficultyMap[difficultyLevel]
    return this.loadNewQuestion(difficulty)
  }

  // ��ȡ��ǰ��Ŀ
  getCurrentQuestion(): QuestionData | null {
    return this.currentQuestion
  }

  // ��ȡ��ǰ��Ŀ������
  getCurrentTopic(): string {
    return this.currentQuestion?.topic || ''
  }

  // ��ȡ��ǰ��Ŀ������
  getCurrentDescription(): string {
    return this.currentQuestion?.description || ''
  }

  // ��ȡ��ǰ��Ŀ����ʾ�б�
  getCurrentPrompts(): string[] {
    return this.currentQuestion?.prompts || []
  }

  // ��ȡָ����������ʾ
  getPromptByIndex(index: number): string {
    const prompts = this.getCurrentPrompts()
    if (prompts.length === 0) return ''
    
    const validIndex = Math.max(0, Math.min(index, prompts.length - 1))
    return prompts[validIndex]
  }

  // ��ȡ��һ����ʾ��ѭ����
  getNextPrompt(currentIndex: number): { prompt: string; nextIndex: number } {
    const prompts = this.getCurrentPrompts()
    if (prompts.length === 0) {
      return { prompt: '', nextIndex: 0 }
    }

    const nextIndex = (currentIndex + 1) % prompts.length
    return {
      prompt: prompts[nextIndex],
      nextIndex
    }
  }

  // ���ʹ����ʷ
  clearHistory(): void {
    this.usedQuestionIds = []
  }

  // ���õ�ǰ��Ŀ
  reset(): void {
    this.currentQuestion = null
  }

  // ��ȡ��Ŀͳ����Ϣ
  getQuestionInfo() {
    if (!this.currentQuestion) return null

    return {
      id: this.currentQuestion.id,
      topic: this.currentQuestion.topic,
      description: this.currentQuestion.description,
      difficulty: this.currentQuestion.difficulty,
      category: this.currentQuestion.category,
      tags: this.currentQuestion.tags,
      estimatedTime: this.currentQuestion.estimatedTime,
      promptCount: this.currentQuestion.prompts.length
    }
  }
}