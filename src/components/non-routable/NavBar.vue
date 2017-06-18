<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link :to="{ name: 'room-list' }" class="navbar-brand">
          {{ company }}
        </router-link>
      </div>
      <ul class="nav navbar-nav navbar-right">
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
            {{ username }}
            <span class="caret"></span>
          </a>
          <ul class="dropdown-menu">
            <li><router-link :to="{ name: 'archive' }">Archive</router-link></li>
            <li role="separator" class="divider"></li>
            <li><a @click="logout">Logout</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'nav-bar',
    props: ['company', 'username', 'logout']
  }
</script>
