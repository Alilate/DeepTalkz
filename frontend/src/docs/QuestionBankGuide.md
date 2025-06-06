# ���ӿ�ʹ��ָ��

## ����

�µ����ӿ�ϵͳ�Ѿ����ɵ���Ŀ�У�**��Ӱ�����е�����ģ�ͺ�VersusModel�ṹ**��ϵͳ�ṩ�˷ḻ����Ŀ���ݣ�֧�������ȡ���Ѷ�ɸѡ�ȹ��ܡ�

## ��Ҫ�ص�

? **���޸����нṹ** - ��ȫ������APIϵͳ  
? **������** - ����ԭ�й�����������  
? **�����л�** - ����ʹ����⣬����ԭ����Ŀ  
? **�ḻ��Ŀ** - 10��Ԥ����Ŀ��3���Ѷȵȼ�  
? **���ַ���** - 8�����࣬����������  

## �ļ��ṹ

```
src/
������ api/
��   ������ QuestionBankAPI.ts       # ���API�ӿ�
������ utils/
��   ������ QuestionManager.ts       # ��������
������ components/
��   ������ QuestionBankDemo.vue     # ��ʾ���
������ controllers/
    ������ VersusController.ts      # �Ѽ�����⹦��
```

## ʹ�÷���

### 1. ����API����

```typescript
import { getRandomQuestion, getQuestionByDifficulty } from '../api/QuestionBankAPI'

// ��ȡ�����Ŀ
const response = await getRandomQuestion()
if (response.success && response.data) {
  console.log('��Ŀ:', response.data.topic)
  console.log('��ʾ:', response.data.prompts)
}

// ���ѶȻ�ȡ��Ŀ
const advanced = await getQuestionByDifficulty('advanced')
```

### 2. ��Controller��ʹ�ã��Ѽ��ɣ�

```typescript
// VersusController �Ѿ���������⹦��
// ��ʼ��սʱ���Զ�������Ŀ
await controller.startMatch()

// �л�����һ����Ŀ
controller.nextTopic()

// ��ȡ��ǰ��Ŀ����ʾ
const topic = controller.currentTopic
const prompt = controller.currentPrompt
```

### 3. ʹ��QuestionManager

```typescript
import { QuestionManager } from '../utils/QuestionManager'

const questionManager = new QuestionManager()

// ��������Ŀ
await questionManager.loadQuestionByLevel('�м�')

// ��ȡ��Ŀ��Ϣ
const topic = questionManager.getCurrentTopic()
const prompts = questionManager.getCurrentPrompts()
```

## ��Ŀ���ݽṹ

```typescript
interface QuestionData {
  id: string                    // Ψһ��ʶ
  topic: string                 // ��Ŀ����
  description: string           // ��Ŀ����
  prompts: string[]            // �Ի���ʾ�б�
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  category: string             // ����
  tags: string[]               // ��ǩ
  estimatedTime: number        // Ԥ��ʱ�䣨���ӣ�
}
```

## Ԥ����Ŀ����

- **lifestyle** - ���ʽ���ճ�����ʳ�����ã�
- **society** - ��Ự�⣨�Ƽ���������
- **career** - ְҵ��أ�����ƽ�⣩
- **environment** - ��������
- **culture** - �Ļ���ͬ
- **technology** - �Ƽ�����
- **health** - ������
- **personal** - ���˳ɳ�

## ����Ч��

### �ڶԻ�ϵͳ�еı仯��

1. **��ʼ��ս** - �Զ����ط����Ѷȵ������Ŀ
2. **��һ����** - �����л�����Ŀ�������ظ�
3. **��Ŀ��ʾ** - ������ʾ�����Ŀ������ԭ����Ŀ
4. **��ʾϵͳ** - ʹ������е�רҵ��ʾ

### �û�����������

- ? **���ݷḻ** - �������ĶԻ�����
- ? **�����ظ�** - �����ų���ʹ����Ŀ
- ? **�Ѷ�ƥ��** - �����û�ѡ����Ѷ��ṩ������Ŀ
- ?? **��������** - ��ͬ���͵ĶԻ�����

## ��ʾ�Ͳ���

ʹ�� `QuestionBankDemo.vue` ������ԣ�

- ����API����
- �鿴���ͳ��
- ���Ѷ�ɸѡ��Ŀ
- �鿴API���ü�¼

## ��˶Խ�

�����ʵ��ʱ��ֻ��Ҫ��

1. �޸� `QuestionBankAPI.ts` �е�������Դ
2. ��ģ�������滻Ϊ��ʵAPI����
3. ��Ӵ�����ͻ������

## ע������

- ? ��Ӱ�����е�Live2D����ģ��
- ? ���޸�VersusModel�ĺ��Ľṹ
- ? ��ȫ������
- ? ������ʱ������⹦�ܻص�ԭ��ģʽ

## �����ų�

����������⣺

1. ��� `QuestionManager` �Ƿ���ȷ��ʼ��
2. ȷ��API�����Ƿ�ɹ���������
3. �鿴���������̨�Ĵ�����Ϣ
4. ���Ϊ��ʱ���Զ����˵�ԭ����Ŀϵͳ