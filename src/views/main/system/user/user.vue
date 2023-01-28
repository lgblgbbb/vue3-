<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    />
    <div class="content">
      <page-content
        ref="pageContentRef"
        :contentTableConfig="contentTableConfig"
        pageName="users"
      ></page-content>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import PageSearch from '@/components/page-search'
import { searchFormConfig } from './config/search.config'

import { contentTableConfig } from './config/content.config'
import PageContent from '@/components/page-content'
import { usePageSearch } from '@/hooks/use-page-search'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent
  },

  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
    return {
      searchFormConfig,
      contentTableConfig,
      pageContentRef,
      handleResetClick,
      handleQueryClick
    }
  }
})
</script>

<style scoped></style>
