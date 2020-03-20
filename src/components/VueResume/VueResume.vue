<template>
  <div>
    <BasicShow></BasicShow>
    <WorkShow></WorkShow>
    <SkillsShow></SkillsShow>
    <SelfShow></SelfShow>
  </div>
</template>

<script>
import BasicShow from './ResumeFillInWiterShow/BasicShow'
import WorkShow from './ResumeFillInWiterShow/WorkShow'
import SkillsShow from './ResumeFillInWiterShow/SkillsShow'
import SelfShow from './ResumeFillInWiterShow/SelfShow'
export default {
  name: 'VueResume',
  data() {
    return {

    }
  },
  methods: {

  },
  components: {
    BasicShow,    // 基本信息编写结果
    WorkShow,     // 工作经历编写结果 
    SkillsShow,   // 技能证书编写结果
    SelfShow      // 自我评价编写结果
  }
}
</script>

<style>

</style>
