<template>
  <header id="top-header">
		<div class="menu-top-header">
			<div class="left-menu">
				<div id="menu-item-1" class="menu-item">
					<div class="icon-wrap">
					</div>
					Via Antonio Maria Lorgna 22 - 00143 - RM
					
				</div>
				<!-- /#menu-item-1 -->
				<div id="menu-item-2" class="menu-item">
					<div class="icon-wrap">
					</div>
					Lun - Ven 10.00/19.00
				</div>
				<!-- /#menu-item-2 -->
				<div id="menu-item-3" class="menu-item">
					<div class="icon-wrap">
					</div>
					studio@millenarigroup.com
				</div>
				<!-- /#menu-item-3 -->
			</div>
			<!-- /.left-menu -->
			<div class="right-menu">
				<a class="btn btn-lg btn-contattaci-top-header">
					PRENOTA UNA SESSIONE
				</a>
				<!-- /.btn-contattaci-top-header -->
			</div>
			<!-- /.right-menu -->
		</div>
		<!-- /.menu-top-header -->
  </header>
  <!-- /#top-header -->
</template>

<script>
export default {};
</script>

<style lang="scss">
$white: #fff;

#top-header {
  width: 100%;
  height: 62px;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
	.menu-top-header{
		margin: 0px 5%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		.left-menu{
			display: flex;
			align-items: center;
			.menu-item{
				color: $white;
				display: flex;
				align-items: center;
				margin: 0px 20px;
				.icon-wrap{
					width: 37px;
					height: 37px;
					aspect-ratio: 1/1;
					background-color: rgba(0, 0, 0, 0.8);
					border-radius: 8%;
					margin-right: 10px;
				}
			}
		}
		.right-menu{
			.btn-contattaci-top-header{
				background: #fff;
				padding: 5px 15px;
				border-radius: 9rem;
			}
		}
	}
}
</style>