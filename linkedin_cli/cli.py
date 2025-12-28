import click
from . import profile, connections, posts, messaging

@click.group()
def cli():
    """LinkedIn CLI - Placeholder for LinkedIn features"""
    pass

cli.add_command(profile.profile)
cli.add_command(connections.connections)
cli.add_command(posts.posts)
cli.add_command(messaging.messaging)

if __name__ == "__main__":
    cli()
