<template>
  <Container max-width="768px">
    <n-h1 prefix="bar">关于我</n-h1>
    <div :style="{ display: 'inline-flex', width: '100%', justifyContent: 'center' }">
      <n-image :src="Avatar" alt="头像" height="250" />
    </div>
    <n-divider />
    <n-p>
      业余 TypeScript 全栈，会 React、Express、knexjs、sequelize、mongoose 等，正拿 Vue 3 + Naive UI
      摸博客。
    </n-p>
    <n-p>前化竞党，后转行劝退，没听劝的奥赛生后来都后悔了。</n-p>
    <n-p>
      业余活动家，被校方约谈数次、被区派出所约谈 1 次，写的文章天天被删。B
      站疑似因拉黑官媒被永封。偶尔会写些不那么容易被删的技术类文章。
    </n-p>
    <n-p>民主改革家，一次成功、一次失败。</n-p>
    <n-p>国际主义 + 科学社会主义者，写的代码全都用了 AGPLv3 协议。</n-p>
    <n-p>性别身份：</n-p>
    <KaTeX
      latex="\begin{aligned}
        \text{mt}\Psi(x,y,z,t)&&\lim_{t\rarr0}\Psi^2=f
        \end{aligned}"
    />
    <n-p>性取向：</n-p>
    <KaTeX
      latex="\begin{aligned}
        \Psi'(x,y,z,t)&&\lim_{t\rarr0}\Psi'^2=0
        \end{aligned}"
    />
    <n-blockquote>
      曾经有个年轻人，想把全世界都总结进一个理论里。因为他非常聪明，也确实做到了。他在完成时，回首看着、欣赏着自己所构筑的世界，那非常美丽。
      地平线默默延续，好像闪耀的冰川，无边无沿。摒除了不完美和不确定的新世界，完美的世界展现眼前。所以那位聪明的年轻人环视他所创造的世界，决定探索它。
      可是，当他向前迈出第一步——却摔了个四脚朝天。<br />
      为什么？为什么，他摔倒了？因为他忽略了摩擦力。冰面平坦光滑，洁净无瑕，所以所有人都无法在上面行走。
      年轻人坐在那里，他看着自己的精彩造物，放声恸哭。<br />
      当成长为一个智慧的老人时，他逐渐明白了。他开始理解粗糙与混沌不是缺陷，粗糙与混沌使世界运转。
      虽然他已经日渐喜欢上那坑坑洼洼的地面这一本身的“概念”，但他却无法让自己在那里安顿下来。现在他在地面和冰面之间徘徊，但哪都不是他的归宿。
      这是他所有悲痛的来由。天才无法安居光滑或是粗糙的世界之中，只能凝视着这样的世界。<br /><br />
      ——电影《维特根斯坦》，间接引自游戏《终之空 重制版》
    </n-blockquote>
  </Container>
</template>
<script lang="ts" setup>
import { NH1, NP, NBlockquote, NImage, NDivider } from 'naive-ui';
import Avatar from '../../renderer/assets/头像圆.png';
import Container from '../../renderer/components/Container.vue';
import KaTeX from '../../renderer/components/KaTeX.vue';
</script>
