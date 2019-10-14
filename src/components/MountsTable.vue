<template>
  <div class="mounts-table">
    <h4>
      進度: {{completedCount}}/{{mounts.length}}
    </h4>
    <table>
      <tr>
        <th
          class="col--center"
          @click="toggleSort('complete')"
        >
          完成
          <span :class="{'indicator--sorted': sortTarget === 'complete', 'indicator--des': ase === false}" />
        </th>
        <th
          v-for="col in colnames"
          :key="col.key"
          class="col"
          @click="toggleSort(col.key)"
        >
          {{ col.name }}
          <span :class="{'indicator--sorted': sortTarget === col.key, 'indicator--des': ase === false}" />
        </th>
      </tr>
      <tr
        v-for="mount in sortedMounts"
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
      }],
      sortTarget: 'id',
      ase: true
    }
  },
  computed: {
    completedCount () {
      return this.mounts.filter(mount => mount.complete).length
    },
    sortedMounts () {
      const ase = this.ase ? 1 : -1
      return this.mounts
        .slice()
        .sort((a, b) => {
          return (a[this.sortTarget] < b[this.sortTarget] ? -1 : 1) * ase
        })
    }
  },
  methods: {
    toggleSort (name) {
      if (name !== this.sortTarget) this.ase = true
      else this.ase = !this.ase
      this.sortTarget = name
    }
  }
}
</script>

<style lang="scss" scoped>
.mounts-table {
  text-align: left;
  font-size: 14px;
  padding-left: 15px;
}
table {
  width: 100%;
  max-width: 1400px;
  margin: auto;
  border-collapse: collapse;
}
th {
  font-size: 16px;
  cursor: pointer;
  border: 1px solid #333;
  padding: 5px;
  &:hover {
    background-color: lightblue;
  }
}
td {
  padding: 10px 5px;
  border: 1px solid #ddd;
}
.col--center {
  text-align: center;
}
.indicator--sorted {
  display: inline-block;
  position: relative;
  top: 50%;
  width: 0;
  height: 0;
  border-width: 4px 5px;
  border-style: solid;
  border-color: blue transparent transparent transparent;
  &.indicator--des {
    transform: translateY(-4px) rotate(180deg);
  }
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
  border: 1px solid #333;
  &.mark--complete {
    background-color: skyblue;
    box-shadow: inset 0px 0px 5px -1px blue;
  }
}
</style>
