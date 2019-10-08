<template>
  <div class="mounts-table">
    <table>
      <tr>
        <th class="col--center">完成</th>
        <th
          v-for="col in colnames"
          :key="col.key"
          class="col"
        >
          {{ col.name }}
        </th>
      </tr>
      <tr
        v-for="mount in mounts"
        :key="mount.id"
        class="row"
        :class="{'row--complete': mount.complete}"
      >
        <td class="col--center">
          <div
            class="mark"
            :class="{'mark--complete': mount.complete}"
          />
        </td>
        <td
          v-for="col in colnames"
          :key="col.key"
          class="col"
        >
          {{ mount[col.key] }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    mounts: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      colnames: [{
        name: 'No.',
        key: 'id'
      }, {
        name: '山名',
        key: 'name'
      }, {
        name: '分級',
        key: 'level'
      }, {
        name: '高度',
        key: 'height'
      }, {
        name: '所在行政區',
        key: 'location'
      }, {
        name: '所屬國家公園',
        key: 'park'
      }, {
        name: '群組',
        key: 'series'
      }, {
        name: '備註',
        key: 'description'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.mounts-table {
  text-align: left;
  font-size: 14px;
  padding-left: 50px;
}
table {
  width: 100%;
  max-width: 1400px;
  margin: auto;
  border-collapse: collapse;
}
th {
  font-size: 16px;
}
td {
  padding: 5px 0px;
  border-bottom: 1px solid #eee;
}
.col--center {
  text-align: center;
}
.row--complete {
  background-color: #eee;
}
.mark {
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 10px;
  box-sizing: border-box;
  border: 1px solid lightgray;
  &.mark--complete {
    background-color: skyblue;
  }
}
</style>
