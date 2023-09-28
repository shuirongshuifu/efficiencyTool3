<template>
    <!-- look -->
    <el-select v-model="value" placeholder="请选择" class="elst">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
    </el-select>
    <child />
</template>
  
<script>
import child from "./components/child.vue";
export default {
    components: { child },
    data() {
        return {
            options: [
                {
                    value: '111',
                    label: '孙悟空'
                },
                {
                    value: '222',
                    label: '猪八戒'
                },
                {
                    value: '333',
                    label: '沙和尚'
                },
                {
                    value: '444',
                    label: '唐僧'
                },
                {
                    value: '555',
                    label: '白龙马'
                },
            ],
            value: ''
        }
    }
}
</script>